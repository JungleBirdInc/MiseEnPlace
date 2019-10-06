import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NewdistService } from '../services/newdist.service';

@Component({
  selector: 'app-newdist',
  templateUrl: './newdist.component.html',
  styleUrls: ['./newdist.component.css']
})
export class NewdistComponent implements OnInit {

  constructor(
    private _newdist: NewdistService,
    private dist: FormBuilder,
  ) { }

  newdistForm = this.dist.group({
    orgId: 1, //CHANGE WITH LOGIN
    name: [''],
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
    const newdist = this.newdistForm.value;
    console.log(this.newdistForm.value);
    if (this.newdistForm.value.establishment === '99') {
      // this.router.navigate(['organization']); 
    } else {
      // this.router.navigate(['']);
    }

    this._newdist.regDist(newdist)
      .subscribe(data => {
        console.log(data);
      });
  }

}