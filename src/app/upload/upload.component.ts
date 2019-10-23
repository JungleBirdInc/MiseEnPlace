import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import { GetbotsizeService } from '../services/getbotsize.service';
import { NewinvoiceService } from '../services/newinvoice.service';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public uploadService: UploadService,
    private _getbotsize: GetbotsizeService,
    private _newinvoice: NewinvoiceService,
    private _getcurrentinventory: GetCurrentInvService,
    ) { }

  public invoiceRaw;
  public invoice;
  public botsize;
  public currentInventory; 
  public formattedInvoice;

  ngOnInit() {
    this.openUploadDialog()

    this._getbotsize.getCategories()
      .then(data => {
        this.botsize = data;
        console.log('bottle sizes', data);
      });

    this._getcurrentinventory.getCurentInventory()
      .then(data => {
        this.currentInventory = data;
        console.log('current inventory', data);
      });
  }

  import() {
    this.invoiceRaw = JSON.parse(window.localStorage.getItem('invoice'));
    console.log('INVOICE RAW', this.invoiceRaw);

    const prod = {
    invoice: this.invoiceRaw.body.invoice || null,
    distributor: this.invoiceRaw.body.matches[0].name || null,
    dist_id: undefined,
    rep_id: 1, // check
    receiptSet: [],
    total_price: 0,
    url: null,
    admin_id: 1 // default (change with auth)
  };

    this.invoiceRaw.body.products.forEach(product => {
        if (product.guesses.length !== 0) {

          product.guesses.forEach(guess => {
            if (prod.dist_id === undefined) {
              prod.dist_id = guess.product.dist_id || null;
            }

            let indProd = {
              name: guess.name || null,
              price: guess.product.price || null,
              productId: guess.product.productId || null,
              btlSizeId: guess.product.product.btlSizeId || null,
              bottleSize: undefined,
              categoryId: guess.product.product.categoryId || null,
              upc: guess.product.product.upc || null,
              qty: 0
            };

            this.botsize.forEach(bottle => {
                if (indProd.btlSizeId === bottle.id) {
                  indProd.bottleSize = bottle.size;
                }
            });

            let count = true;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < prod.receiptSet.length; i++) {
              if (prod.receiptSet[i].name === indProd.name) {
                count = false;
              }
            }

            if (count) {
              prod.receiptSet.push(indProd);
            }

            count = true;

          }); // for each guess
        }// if statement
      }); // for each product

    this.invoice = prod;
  } // import

  saveData() {
    let receiptSetTemp = [];

    this.currentInventory[0].logs_products.forEach(product => {
      this.invoice.receiptSet.forEach(invproduct => {

        console.log(`${product.distributors_product.product.product_name} === ${invproduct.name}`);
        if(product.distributors_product.product.product_name === invproduct.name){
          product.qty += parseInt(invproduct.qty);
          receiptSetTemp.push(product);
        }
      });
    });

    this.invoice.receiptSet = receiptSetTemp;
    console.log('INVOICE FINAL', this.invoice);

    this._newinvoice.newInvoice(this.invoice)
      .then(data => {
        console.log('newinvoice return', data);
        localStorage.removeItem('invoice');
      });
    this.router.navigate(['invoices']);
  }

  calcTotal() {
    console.log(this.invoice);

    if (this.invoice !== undefined) {
      let sum = 0;
      this.invoice.receiptSet.forEach(product => {
        sum += product.qty * product.price;
      });
      this.invoice.total_price = sum;
      return sum;
    } else {
      return 0;
    }
  }

  remove(i: string | number) {
    console.log('deleted', this.invoice.receiptSet[i]);
    this.invoice.receiptSet.splice(i, 1);
    console.log(this.invoice.receiptSet);
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent)
  }
}
