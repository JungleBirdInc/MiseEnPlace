import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

// SERVICES
import { GetinvoicesService } from '../services/getinvoices.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { GetdistService } from '../services/getdist.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})

export class InvoicesComponent implements OnInit {

  constructor(
    private _getinvoices: GetinvoicesService,
    private _getbotsize: GetbotsizeService,
    private _getdist: GetdistService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) {}

  // RESPONSE FROM SERVICES
  public invoices;
  public botsize;
  public dists;

  ngOnInit() {
    this._getinvoices.getInvoices()
      .then(data => {
        this.invoices = data;
        console.log('invoices response', data);
      });

    // GET BOTTLE SIZES
    this._getbotsize.getCategories()
      .then(data => {
        this.botsize = data;
      });

    // GET DISTRIBUTORS
    this._getdist.getDistributors()
      .then(data => {
        this.dists = data;
      })
      .then(() => {
        this.convert();
      })
  }

  // STORE CONVERTED DATA
  public invoiceList = [];

  public convert(){
    // CONVERT PRODUCT OBJECTS AND STORE IN MASTER ARRAY
    this.invoices.forEach(invoice => {
      let prod = 
      {
        distributor: invoice.dist_id,
        total: invoice.total_price,
        repName: invoice.rep_id,
        repNum: undefined,
        products: [],
        date: invoice.createdAt,
      }

      // ASSIGN DISTRIBUTOR AND REP NAME/NUMBER
      this.dists.forEach(dist => {
        if (prod.distributor === dist.distributorOrganizationId) {
          prod.distributor = dist.distributor.name;

          if (dist.distributor.reps.length !== 0) {
            prod.repName = `${dist.distributor.reps[0].first_name} ${dist.distributor.reps[0].last_name}`;
            prod.repNum = dist.distributor.reps[0].phone;
          } else {
            prod.repName = `Dist. #`;
            prod.repNum = dist.distributor.phone;
          }
        }
      });

      // ASSIGN PRODUCT NAME / BOTTLE SIZE / PRICE / ORDER QTY
      invoice.logs_products.forEach(product => {
        prod.products.push({
          name: product.distributors_product.product.product_name,
          bottleSize: this.botsize[product.distributors_product.product.btlSizeId - 1].size,
          price: product.distributors_product.price,
          qty: product.qty,
          //NOT SURE IF QTY REFERS TO ON HAND OR ON ORDER
        });
      });
      this.invoiceList.push(prod);
    });
    console.log('invoice list', this.invoiceList);
  }
}
