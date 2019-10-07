import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// implement check boxes to select which orders to sebd, need icons
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
