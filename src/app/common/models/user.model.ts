
export class LoginReq {
    loginId: string
    password: string
    accessKey:string

    constructor() {
        this.loginId = ''
        this.password = ''
        this.accessKey=''
    }
}


export class signupReq {
    firstname: string
    lastname:string
    emailid:string
    password: string
    verifypassword:string


    constructor() {
        this.firstname = ''
        this.lastname = ''
        this.password = ''
        this.verifypassword = ''
        this.emailid =''
       
    }
}