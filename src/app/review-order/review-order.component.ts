import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// implement check boxes to select which orders to sebd, need icons

export interface OrderElement {
  productName: string;
  unitCost: number;
  volume: string;
  quantity: number;
  par: number;
  ordered: number;
}

const REP1_DATA: OrderElement [] = [
  {productName: 'Jack Daniels', unitCost: 10.17, volume: '750mL', quantity: 4, par: 5, ordered: 1},
  {productName: 'Bulleit', unitCost: 10.17, volume: '1L', quantity: 4, par: 5, ordered: 1},
  {productName: 'Eagle Rare', unitCost: 10.17, volume: '750mL', quantity: 2, par: 4, ordered: 2},
  {productName: 'Jim Beam', unitCost: 10.17, volume: '1L', quantity: 3, par: 4, ordered: 2},
  {productName: 'Old Forester', unitCost: 10.17, volume: '750mL', quantity: 5, par: 3, ordered: 0},
  {productName: 'Blantons\'s', unitCost: 10.17, volume: '750mL', quantity: 2, par: 4, ordered: 2},
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
  rep1 = REP1_DATA;

  ngOnInit() {
  }

  sendOrders() {
    this.router.navigate(['orders']);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost(rep) {
    return rep.map(t => t.unitCost * t.ordered).reduce((acc, value) => acc + value, 0);
  }

  toggleShow() {
    this.show = !this.show;
  }

  confirmOrders() {
    this.router.navigate(['orders']);
  }
}
