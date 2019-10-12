import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(
    private _organization: OrganizationService,
    private org: FormBuilder,
  ) { }

  orgForm = this.org.group({
    org_name: [''],
    address: [''],
    city: [''],
    state: [''],
    zip: [''],
    email: [''],
    phone: [''],
  });

  ngOnInit() {
  }

  onSubmit() {
    const organization = this.orgForm.value;
    console.log(this.orgForm.value);
    if (this.orgForm.value.establishment === '99') {
      // this.router.navigate(['organization']); 
    } else {
      // this.router.navigate(['']);
    }

    this._organization.regOrg(organization)
      .then(data => {
        console.log(data);
      });
  }

}

/*
 * Organizations Table
 * org_name: the organizations name. Required.
 * master_inventory: the id of the master inventory for an organization
 * address: the street address
 * state: 2 character abbreviation only
 * zip: 5 digit american postal code
 */