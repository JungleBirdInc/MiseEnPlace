import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NewrepService } from '../services/newrep.service';

@Component({
  selector: 'app-newrep',
  templateUrl: './newrep.component.html',
  styleUrls: ['./newrep.component.css']
})
export class NewrepComponent implements OnInit {

  constructor(
    private _newrep: NewrepService,
    private rep: FormBuilder,
  ) { }

  repForm = this.rep.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    phone: [''],
    dist_id: [''],
  });

  ngOnInit() {
  }

  onSubmit() {
    const newrep = this.repForm.value;
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