import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  productName: string;
  subCategory: string;
  volume: string;
  quantity: number;
  price: number;
}
const ORDER_DATA: PeriodicElement [] = [
  {productName: 'Jack Daniels', subCategory: 'Bourbon', volume: '750mL', quantity: 4, price: 57.23},
  {productName: 'Bulleit', subCategory: 'Bourbon', volume: '1L', quantity: 4, price: 52.74},
  {productName: 'Eagle Rare', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 36.14},
  {productName: 'Jim Beam', subCategory: 'Bourbon', volume: '1L', quantity: 3, price: 33.77},
  {productName: 'Old Forester', subCategory: 'Bourbon', volume: '750mL', quantity: 5, price: 48.29},
  {productName: 'Blanton\'s', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 47.10},
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  public items: string[] = ['Distributer', 'Date', 'Invoice Number', ];

  show = false;

  displayedColumns: string[] = ['productName', 'subCategory', 'volume', 'quantity', 'price'];
  dataSource = ORDER_DATA;

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
  }

  getTotalCost() {
    return this.dataSource.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
