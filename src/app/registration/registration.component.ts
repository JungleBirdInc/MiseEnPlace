import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private router: Router,
    private reg: FormBuilder,
  ) { }

  registrationForm = this.reg.group({
    email: [''], // formcontrolnames
    firstName: [''],
    lastName: [''],
    password: [''],
    passwordCheck: [''],
    posititon: [''],
  });

  ngOnInit() {
  }

}
