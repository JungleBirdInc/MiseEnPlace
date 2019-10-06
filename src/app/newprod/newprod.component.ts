import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NewprodService } from '../services/newprod.service';

@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {

  constructor(
    private _newprod: NewprodService,
    private prod: FormBuilder,
  ) { }

  prodForm = this.prod.group({
    upc: undefined,
    product_name: undefined,
    category_id: undefined,
    sub_category_id: undefined,
    size: undefined,
    notes: undefined,
    tare: undefined,
    dist_id: undefined,
    price: undefined,
  });

  ngOnInit() {
  }

  onSubmit() {
    const newprod = this.prodForm.value;
    console.log(this.prodForm.value);
    if (this.prodForm.value.establishment === '99') {
      // this.router.navigate(['organization']); 
    } else {
      // this.router.navigate(['']);
    }

    this._newprod.regProd(newprod)
      .subscribe(data => {
        console.log(data);
      });
  }

}