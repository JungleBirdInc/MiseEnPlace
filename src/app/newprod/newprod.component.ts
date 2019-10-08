import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NewprodService } from '../services/newprod.service';
import { GetdistService } from '../services/getdist.service';

@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {

  constructor(
    private _newprod: NewprodService,
    private _getdist: GetdistService,
    private prod: FormBuilder,
  ) { }

  public distributors;
  public dist;

  prodForm = this.prod.group({
    upc: undefined,
    product_name: undefined,
    size: undefined,
    notes: undefined,
    tare: undefined,
    dist_id: undefined,
    price: undefined,

    categoryId: undefined,
    category_id: undefined,
    subcategoryId: undefined,
    sub_category_id: undefined,
    products: {categoryId: undefined}
  });

  ngOnInit() {
    this._getdist.getDistributors()
      .subscribe(data => {
        this.distributors = data;
        console.log(this.distributors, 'distributors');
      });
  }

  onSubmit() {
    const newprod = this.prodForm.value;

    this.prodForm.value.dist_id = parseInt(this.dist.distributorOrganizationId);
    this.prodForm.value.categoryId = parseInt(this.prodForm.value.categoryId);
    this.prodForm.value.subcategoryId = parseInt(this.prodForm.value.subcategoryId);
    this.prodForm.value.tare = parseInt(this.prodForm.value.tare);
    // this.prodForm.value.upc = parseInt(this.prodForm.value.upc);
    this.prodForm.value.price = parseInt(this.prodForm.value.price);
    // this.prodForm.value.size = parseInt(this.prodForm.value.size);

    this.prodForm.value.category_id = parseInt(this.prodForm.value.categoryId);
    this.prodForm.value.sub_category_id = parseInt(this.prodForm.value.subcategoryId);
    this.prodForm.value.products.categoryId = parseInt(this.prodForm.value.categoryId);

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