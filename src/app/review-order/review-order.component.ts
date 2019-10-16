import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostOrderService } from '../services/placeorder.service';


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
  ordered = window.history.state.ordered;
  public _placeOrder: PostOrderService;

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
  }

  confirmOrders(data) {
    this._placeOrder.sendOrder(data)
    .then(() => {
      this.router.navigateByUrl('orders');
    });
  }
}
