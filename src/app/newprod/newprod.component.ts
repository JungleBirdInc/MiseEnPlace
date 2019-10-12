import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NewprodService } from '../services/newprod.service';
import { GetdistService } from '../services/getdist.service';
import { GetcategoriesService } from '../services/getcategories.service';
import { GetbotsizeService } from '../services/getbotsize.service';

@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {

  constructor(
    private _newprod: NewprodService,
    private _getdist: GetdistService,
    private _getcate: GetcategoriesService,
    private _getbotsize: GetbotsizeService,
    private prod: FormBuilder,
  ) { }

  public distributors;
  public dist;

  public categories;
  public cate = { subcategories: [''], id: '0' };

  public subcategories;
  public sub;

  public bottlesize;
  public size;

  prodForm = this.prod.group({
    upc: undefined,
    product_name: undefined,
    btlSizeId: undefined,
    notes: undefined,
    tare: undefined,
    dist_id: undefined,
    price: undefined,
    categoryId: undefined,
    subcategoryId: undefined,
  });

  ngOnInit() {
    this._getdist.getDistributors()
      .then(data => {
        this.distributors = data;
      });

    this._getcate.getCategories()
      .then(data => {
        this.categories = data;
      });

    this._getbotsize.getCategories()
      .then(data => {
        this.bottlesize = data;
      });
  }

  onSubmit() {
    const newprod = this.prodForm.value;

    this.prodForm.value.dist_id = parseInt(this.dist.distributorOrganizationId);
    this.prodForm.value.categoryId = parseInt(this.prodForm.value.categoryId);
    this.prodForm.value.subcategoryId = parseInt(this.prodForm.value.subcategoryId);
    this.prodForm.value.tare = parseInt(this.prodForm.value.tare);
    this.prodForm.value.price = parseInt(this.prodForm.value.price);
    this.prodForm.value.categoryId = parseInt(this.cate.id);

    this.prodForm.value.btlSizeId = parseInt(this.size.id);

    console.log(this.prodForm.value);

    if (this.prodForm.value.establishment === '99') {
      // this.router.navigate(['organization']); 
    } else {
      // this.router.navigate(['']);
    }

    console.log(this.cate, 'cate');

    this._newprod.regProd(newprod)
      .then(data => {
        console.log(data);
      });
  }
}