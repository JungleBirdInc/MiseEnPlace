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
    private router: Router,
    private reg: FormBuilder,
    private register: RegisterService
  ) { }

  registrationForm = this.reg.group({
    email: [''], // formcontrolnamesenviorment
    firstName: [''],
    lastName: [''],
    password: [''],
    passwordCheck: [''],
    position: [''],
  });

  ngOnInit() {
  }

  createUser() {
    const user = this.registrationForm;
    return this.register.createUser({
      user
    }).subscribe(reply => {
      console.log(reply);
      this.router.navigate(['']); // sends home
    });
  }
}
