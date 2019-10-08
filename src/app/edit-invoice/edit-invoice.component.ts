import { Component, OnInit, HostListener  } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

export interface Inventory {
  productName: string;
  subCategory: string;
  volume: string;
  quantity: number;
  price: number;
}

const REP1_DATA: Inventory [] = [
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
    ) {
     this.rep1 = [
        {productName: 'Jack Daniels', subCategory: 'Bourbon', volume: '750mL', quantity: 4, price: 57.23},
        {productName: 'Bulleit', subCategory: 'Bourbon', volume: '1L', quantity: 4, price: 52.74},
        {productName: 'Eagle Rare', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 36.14},
        {productName: 'Jim Beam', subCategory: 'Bourbon', volume: '1L', quantity: 3, price: 33.77},
        {productName: 'Old Forester', subCategory: 'Bourbon', volume: '750mL', quantity: 5, price: 48.29},
        {productName: 'Blantons\'s', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 47.10},
      ];
    }

  show = true;
  displayedColumns: string[] = ['productName', 'subCategory', 'volume', 'quantity', 'price'];
  rep1 = REP1_DATA;

  ngOnInit() {}

  /** Gets the total cost of all transactions. */
  getTotalCost(invoice) {
    return invoice.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  finalizeInvoice() {
    this.router.navigate(['invoices']);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
