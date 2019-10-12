import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NewrepService } from '../services/newrep.service';
import { GetdistService } from '../services/getdist.service';

@Component({
  selector: 'app-newrep',
  templateUrl: './newrep.component.html',
  styleUrls: ['./newrep.component.css']
})
export class NewrepComponent implements OnInit {

  constructor(
    private _getdist: GetdistService,
    private _newrep: NewrepService,
    private rep: FormBuilder,
  ) { }

  public distributors;
  public dist;

  repForm = this.rep.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    phone: [''],
    dist_id: [''],
  });

  ngOnInit() {
    this._getdist.getDistributors()
      .subscribe(data => {
        this.distributors = data;
        console.log(this.distributors, 'distributors');
      });
  }

  onSubmit() {
    const newrep = this.repForm.value;
    this.repForm.value.dist_id = parseInt(this.dist.distributorOrganizationId);

    console.log(this.repForm.value);
    
    if (this.repForm.value.establishment === '99') {
      // this.router.navigate(['organization']); 
    } else {
      // this.router.navigate(['']);
    }

    this._newrep.regRep(newrep)
      .subscribe(data => {
        console.log(data);
      });
  }

}