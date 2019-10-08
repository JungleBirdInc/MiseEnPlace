import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

const REP1_DATA = [
  {productName: 'Jack Daniels', subCategory: 'Bourbon', volume: '750mL', quantity: 4, price: 57.23},
  {productName: 'Bulleit', subCategory: 'Bourbon', volume: '1L', quantity: 4, price: 52.74},
  {productName: 'Eagle Rare', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 36.14},
  {productName: 'Jim Beam', subCategory: 'Bourbon', volume: '1L', quantity: 3, price: 33.77},
  {productName: 'Old Forester', subCategory: 'Bourbon', volume: '750mL', quantity: 5, price: 48.29},
  {productName: 'Blantons\'s', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 47.10},
];

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
  ) {
   }

  show = false;

  rep1 = REP1_DATA;

  public items: string[] = ['Distributer', 'Date', 'Invoice Number'];

  ngOnInit() {}

  getTotalCost(inventory) {
    return inventory.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
