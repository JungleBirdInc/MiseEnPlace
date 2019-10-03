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
    email: [''], // formcontrolnames
    firstName: [''],
    lastName: [''],
    password: [''],
    passwordCheck: [''],
    posititon: [''],
  });

  ngOnInit() {
  }

  checkAuth() {
    this.router.navigate(['']);
    console.log('fuck yeah son!');

  }
}
