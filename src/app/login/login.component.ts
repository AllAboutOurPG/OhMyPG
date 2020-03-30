import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  constructor(private loginService: LoginService, public auth: AngularFireAuth) { }

  ngOnInit() {}

  login(){
    this.loginService.login().then((res)=>{      
    });
  }

  logout(){
    this.loginService.logout();
  }
}
