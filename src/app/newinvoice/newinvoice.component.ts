import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { GetdistService } from '../services/getdist.service';
import { GetdistprodsService } from '../services/getdistprods.service';
import { NewinvoiceService } from '../services/newinvoice.service';

@Component({
  selector: 'app-newinvoice',
  templateUrl: './newinvoice.component.html',
  styleUrls: ['./newinvoice.component.css']
})
export class NewinvoiceComponent implements OnInit {

  constructor(
    private _newinvoice: NewinvoiceService,
    private _getdist: GetdistService,
    private _getdistprods: GetdistprodsService,
    private invoice: FormBuilder,
  ) { }

  invoiceForm = this.invoice.group({
    qty: undefined,
    distId: undefined,
    prodId: undefined,
  });

  public distributors;
  public dist_id;

  public dist_products;
  public product = { product: { name: '' }, productId: null, price: null };

  public list = [];

  ngOnInit() {
    this._getdist.getDistributors()
      .subscribe(data => {
        this.distributors = data;
      });
    console.log('distributors', this.distributors);
  }

  getProd() {
    this._getdistprods.getDistProds(this.dist_id.id)
      .subscribe(data => {
        this.dist_products = data;
      });
    console.log('dist products', this.dist_products);
  }

  add() {
    this.invoiceForm.value.qty = parseInt(this.invoiceForm.value.qty);
    this.invoiceForm.value.par = parseInt(this.invoiceForm.value.par);
    this.invoiceForm.value.distId = parseInt(this.dist_id.id);

    this.list.push(this.invoiceForm);

    console.log(this.list);

  }

  onSubmit() {
    console.log(this.product);
    this.invoiceForm.value.qty = parseInt(this.invoiceForm.value.qty);
    this.invoiceForm.value.par = parseInt(this.invoiceForm.value.par);
    this.invoiceForm.value.distId = parseInt(this.dist_id.id);

    const body = {
      admin_id: 1,
      type: undefined,
      dist_id: this.invoiceForm.value.distId,
      rep_id: 0,
      total_price: undefined,
      receiptSet: this.list,
    };

    this._newinvoice.newInvoice(body)
      .subscribe(data => {
        console.log(data);
      });
  }
}