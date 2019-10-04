import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private router: Router,
    private login: FormBuilder
  ) { }

  loginForm = this.login.group({
    email: ['TAYLOR@GMAIL'], // formcontrolnames
    password: ['npo'],

  });

  ngOnInit() {
  }

  submit1() {
    console.log(this.loginForm.value.email);
  }
  submit2() {
    console.log(this.loginForm.value.password);
  }

  checkAuth() {
    this.router.navigate(['']);
    console.log('yess');

  }
}
