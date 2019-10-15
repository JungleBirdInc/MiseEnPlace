import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { GetdistService } from '../services/getdist.service';
import { GetdistprodsService } from '../services/getdistprods.service';
import { InitializeInventoryService } from '../services/initializeInventory.service';

@Component({
  selector: 'app-inventory-wizard',
  templateUrl: './inventory-wizard.component.html',
  styleUrls: ['./inventory-wizard.component.css']
})
export class InventoryWizardComponent implements OnInit {

  constructor(
    private _initializeInventory: InitializeInventoryService,
    private _getdist: GetdistService,
    private _getdistprods: GetdistprodsService,
    private inv: FormBuilder,
  ) { }

  invForm = this.inv.group({
    par: undefined,
    qty: undefined,
    distId: undefined,
    prodId: undefined,
  });

  public master = [];
  public weekly = [];

  public distributors;
  public dist_id;

  public dist_products;
  public product = {product: {name: ''}, productId: null, price: null};

  ngOnInit() {
    this._getdist.getDistributors()
      .then(data => {
        this.distributors = data;
      });
    console.log('distributors', this.distributors);
  }

  getProd(){
    this._getdistprods.getDistProds(this.dist_id.id)
    .then(data => {
        this.dist_products = data;
      });
    console.log('dist products', this.dist_products);
  }

  add(){
    this.invForm.value.qty = parseInt(this.invForm.value.qty);
    this.invForm.value.par = parseInt(this.invForm.value.par);
    this.invForm.value.distId = parseInt(this.dist_id.id);
    
    let weeklyProduct = {
      qty: this.invForm.value.qty,
      id: undefined,
      dist_id: this.dist_id.id,
      productId: this.product.productId,
      price: this.product.price,
      createdAt: undefined,
      updatedAt: undefined,
      product: this.product.product
    }
    console.log('WEEKLY', weeklyProduct);
    this.weekly.push(weeklyProduct);

    const masterProduct = {
      qty: this.invForm.value.par,
      id: undefined,
      dist_id: this.dist_id.id,
      productId: this.product.productId,
      price: this.product.price,
      createdAt: undefined,
      updatedAt: undefined,
      product: this.product
    }
    console.log('MASTER', masterProduct);
    this.master.push(masterProduct);

    console.log('----------');
    console.log('master', this.master);

    console.log('----------');
    console.log('weekly', this.weekly);
  }

  onSubmit() {
    console.log(this.product);
    this.invForm.value.qty = parseInt(this.invForm.value.qty);
    this.invForm.value.par = parseInt(this.invForm.value.par);
    this.invForm.value.distId = parseInt(this.dist_id.id);

    const body = {
      admin_id: 1,
      type: undefined,
      dist_id: undefined,
      rep_id: undefined,
      total_price: undefined,
      masterSet: this.master,
      currentSet: this.weekly,
    };

    this._initializeInventory.initializeInventory(body)
      .then(data => {
        console.log(data);
      });
  }
}