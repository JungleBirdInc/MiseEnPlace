import { Component, OnInit, HostListener  } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';

const REP1_DATA = [
  {productName: 'Jack Daniels', subCategory: 'Bourbon', volume: '750mL', quantity: 4, price: 57.23},
  {productName: 'Bulleit', subCategory: 'Bourbon', volume: '1L', quantity: 4, price: 52.74},
  {productName: 'Eagle Rare', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 36.14},
  {productName: 'Jim Beam', subCategory: 'Bourbon', volume: '1L', quantity: 3, price: 33.77},
  {productName: 'Old Forester', subCategory: 'Bourbon', volume: '750mL', quantity: 5, price: 48.29},
  {productName: 'Blantons\'s', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 47.10},
];

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public _getcurrent: GetCurrentInvService,
    ) {}

  rep1 = REP1_DATA;
  current;

  ngOnInit() {
    this._getcurrent.getCurentInventory()
    .then((data) => {
      this.current = data;
      console.log(data);
    });
  }

  /** Gets the total cost of all transactions. */
  getTotalCost(invoice) {
    return invoice.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  finalizeInvoice() {
    this.router.navigate(['invoices']);
  }
}
