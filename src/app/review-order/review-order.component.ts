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

  ngOnInit() {
  }

  sendOrders() {
    this.router.navigate(['orders']);
  }
}
