import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// implement check boxes to select which orders to sebd, need icons

export interface OrderElement {
  productName: string;
  subCategory: string;
  volume: string;
  quantity: number;
  price: number;
}

const ORDER_DATA: OrderElement [] = [
  {productName: 'Jack Daniels', subCategory: 'Bourbon', volume: '750mL', quantity: 4, price: 57.23},
  {productName: 'Bulleit', subCategory: 'Bourbon', volume: '1L', quantity: 4, price: 52.74},
  {productName: 'Eagle Rare', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 36.14},
  {productName: 'Jim Beam', subCategory: 'Bourbon', volume: '1L', quantity: 3, price: 33.77},
  {productName: 'Old Forester', subCategory: 'Bourbon', volume: '750mL', quantity: 5, price: 48.29},
  {productName: 'Blantons\'s', subCategory: 'Bourbon', volume: '750mL', quantity: 2, price: 47.10},
];

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.css']
})
export class ReviewOrderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  show = false;

  displayedColumns: string[] = ['productName', 'subCategory', 'volume', 'quantity', 'price'];
  dataSource = ORDER_DATA; // new MatTableDataSource<OrderElement>();

  ngOnInit() {
  }

  sendOrders() {
    this.router.navigate(['orders']);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.dataSource.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
