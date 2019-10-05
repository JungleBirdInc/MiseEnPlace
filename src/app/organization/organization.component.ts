import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(
    private org: FormBuilder,
  ) { }

  orgForm = this.org.group({
    estabName: [''],
    street: [''],
    city: [''],
    state: [''],
    zip: [''],
    estabEmail: [''],
    number: [''],
  });

  ngOnInit() {
  }

}
