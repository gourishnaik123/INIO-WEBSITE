import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Reflector } from 'src/app/common/services/Reflector';
import { BookingRequestSavedParams } from 'src/app/common/models/booking.model';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnDestroy {
  isWhiteBackground: boolean = false
  subscription: Subscription | undefined

  constructor(
    private reflect: Reflector<boolean>,
    private router: Router,
    ){}

  ngOnInit(): void {
    this.subscription = this.reflect.observe(this.reflect.HOOKS.WHITE_BACKGROUND).subscribe((value) => {
      this.isWhiteBackground = value
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
