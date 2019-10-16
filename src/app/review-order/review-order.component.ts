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

  
  ordered = window.history.state.ordered;
  public _placeOrder: PostOrderService;
  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
    this.show1 = !this.show1;
    this.show2 = !this.show2;
    this.show3 = !this.show3;
    this.show4 = !this.show4;
  }

  confirmOrders1(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].rep_id,
      total_price: 'need to fix',
      weeklySet: data
    };
    this._placeOrder.sendOrder(send);
    this.show1 = !this.show1;
  }
  confirmOrders2(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].rep_id,
      total_price: 'need to fix',
      weeklySet: data
    };
    this._placeOrder.sendOrder(send);
    this.show2 = !this.show2;
  }
  confirmOrders3(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].rep_id,
      total_price: 'need to fix',
      weeklySet: data
    };
    this._placeOrder.sendOrder(send);
    this.show3 = !this.show3;
  }
  confirmOrders4(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].rep_id,
      total_price: 'need to fix',
      weeklySet: data
    };
    this._placeOrder.sendOrder(send);
    this.show4 = !this.show4;
  }
}
