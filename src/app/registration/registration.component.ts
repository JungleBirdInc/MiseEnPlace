import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { }

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

  createUser() {
    let newUser = this.http.post(this.registrationForm);
    this.router.navigate(['']); // sends home
  }
}
