import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private _register: RegisterService,
    private router: Router,
    private reg: FormBuilder,
    private register: RegisterService
  ) { }

  registrationForm = this.reg.group({
    email: ['email'], // formcontrolnamesenviorment
    first_name: ['first name'],
    last_name: ['last name'],
    password: ['password'],
    passwordCheck: ['confirm Password'],
    establishment: [''],
    role_id: [''],
  });

  ngOnInit() {
  }

  createUser() {
    const user = this.registrationForm.value;
    console.log(this.registrationForm.value);
    if (this.registrationForm.value.establishment === '99') {
      this.router.navigate(['organization']); // routes to organization creation
    } else {
        this.router.navigate(['']); // sends home
    }

    this._register.regUser(user)
      .subscribe(data => {
        console.log(data);
      });
  }
}