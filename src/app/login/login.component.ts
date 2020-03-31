import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  constructor(private loginService: LoginService, public auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.loginService.user$.subscribe((user)=>{
      console.log(this.loginService.userDetails.uid);
      if(user && !user.registered){
        this.router.navigate(['/register']);
      }
    })
  }

  login(){
    this.loginService.login().then((res)=>{
    });
  }

  logout(){
    this.loginService.logout();
  }
}
