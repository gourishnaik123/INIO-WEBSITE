declare var google: any;
import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { eSnackBar } from 'src/app/common/enum/enum';
import { LoginReq, signupReq } from 'src/app/common/models/user.model';
import { Reflector } from 'src/app/common/services/Reflector';
import { RestService } from 'src/app/common/services/rest.service';
import { UserApi } from 'src/app/common/services/users.service';
import { Utils } from 'src/app/common/services/Utils';
import { URLConstants } from 'src/app/common/urls/URL.constant';
import { AuthGuard } from 'src/app/common/services/auth-gurd.service';
import { Constants } from 'src/app/general/constants';

import { FacebookService } from './facebook.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  step = 1;
  username = "";
  password = "";
  hide = true;
  verifyhide = true;
  showlogin = false;
  showsignup = false;
  emailPaswordvalidation = false;
  forgotPassword = false;
  model: LoginReq = new LoginReq();
  signupmodel: signupReq = new signupReq();
  user!: any;
  loggedIn!: any;

  constructor(
    private rest: RestService,
    private reflector: Reflector<any>,
    private router: Router,
    private user$: UserApi,
    private snackbar: Utils,
  private fb: FacebookService,  public reflect: Reflector<any>,
    private ngZone: NgZone // Inject NgZone
  ) {
    this.user$.loginError.subscribe(() => {
      this.emailPaswordvalidation = true;
      setTimeout(() => {
        this.emailPaswordvalidation = false;
      }, 3000);
    });
  }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '1099164352329-hjrecg3mm5ih3tm3kmtlfj1rmhiakpps.apps.googleusercontent.com',
      callback: (res: any) => this.handleAndDecryptToken(res)
    });

    google?.accounts.id.renderButton(document.getElementById('google-btn'), {
      size: 'large',
      width: 368,
      height:38,
   
  
    });
 
 
    
    this.OnloadRemoveLocalstorageCredentials();
    this.fb.logout();
  }

  

  fetchUserDetails(): void {
    this.router.navigateByUrl('/home-page');
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }

  toggleVerifyPasswordVisibility(): void {
    this.verifyhide = !this.verifyhide;
  }

  emailLogin(): void {
    this.router.navigateByUrl('/email-login');
  }

  Facebooklogin() {
    this.fb.loginWithFacebook().then(response => {
      console.log('Logged in!', response);
  
     
      this.fb.getProfile().then(profile => {
        console.log('Profile:', profile);
       
        this.user = profile;
        localStorage.setItem('facebooktoken', JSON.stringify(profile));
        AuthGuard.googleloginFb();
        this.reflector.set(this.reflector.HOOKS.AUTH_TOKEN,{});
        this.reflector.set(this.reflector.HOOKS.USER_DETAILS,{});
        this.ngZone.run(() => {
          this.router.navigate(['/home-page']);
        });
      }).catch(error => {
        console.error('Error getting profile', error);
      });
    }).catch(error => {
      console.error('Error logging in', error);
      
    });
  }




  
  private decodeToken(token: string): any {
    return JSON.parse(atob(token.split(".")[1]));
  }

  private handleAndDecryptToken(res: any): void {
    if (res) {
      const payload = this.decodeToken(res.credential);
      console.log(payload);
      localStorage.setItem('tokenPayload', JSON.stringify(payload));
      AuthGuard.googleloginFb();
      this.ngZone.run(() => {
        this.router.navigate(['/home-page']);
      });
    }
  }

  OnloadRemoveLocalstorageCredentials(){
    localStorage.removeItem('tokenPayload');   //facebooktoken
    localStorage.removeItem('facebooktoken');
    localStorage.removeItem('userData')
    google.accounts.id.disableAutoSelect(); //on logout
    // this.reflect.set(this.reflect.HOOKS.AUTH_TOKEN, undefined)
    localStorage.removeItem('reflectStore');
    localStorage.removeItem('userData');
  }
}
