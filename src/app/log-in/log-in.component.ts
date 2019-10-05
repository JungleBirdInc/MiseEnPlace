import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private router: Router,
    private login: FormBuilder,
    private start: LoginService,
  ) { }

  loginForm = this.login.group({
    email: ['email'], // formcontrolnames
    password: ['password'],

  });

  ngOnInit() {
  }



  checkAuth() {
    const user = this.loginForm.value;
    return this.start.signIn({
      user
    });
    // .subscribe(reply =>{
    //   this.router.navigate(['']);
    //   console.log('yess');
    // });
  }
}
