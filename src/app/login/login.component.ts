import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRef = new FormGroup ({
      emailid:new FormControl,
      password:new FormControl,
      typeofuser:new FormControl
    });
    
    msg:string ="";
  
    constructor(public ls:LoginService,public router:Router){} //DI for LoginService

    ngOnInit(): void {
      const email = sessionStorage.getItem('email');  // Retrieve email from session storage
      if (email) {
        console.log('Logged-in user:', email);
        this.router.navigate(['customer']);          // Navigate to customer (or admin) page
      }
    }
  
    signIn():void {
      let login = this.loginRef.value;                         //Get from data
      //console.log(login);
      this.ls.signIn(login).subscribe({
        next:(result: any) => {
          //console.log(result)
          if(result==="Admin login successfully"){
            sessionStorage.setItem('email',login.emailid)      //store email ID
            this.router.navigate(["admin"])
          } else if(result==="Customer login successfully"){
            sessionStorage.setItem('email',login.emailid)
            this.router.navigate(["customer"])
          } else{
          this.msg=result;
          }
      },
      error:(error: any) => {
        console.error(error);
      },
      complete:() => {
        console.log("SignIn done!");
      }
      
    });
      
      this.loginRef.reset();
  }

 
    logout(): void {
      sessionStorage.removeItem('email');  // Clear stored email
      this.router.navigate(['login']);     // Redirect to login
    }

    get isLoggedIn(): boolean {
    return sessionStorage.getItem('email') !== null;
  }

  get loggedInEmail(): string | null {
    return sessionStorage.getItem('email');
  }
    

}
