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
    private router: Router,
    public _placeOrder: PostOrderService,
  ) { }


  ordered = window.history.state.ordered;
  show = false;
  show1 = false;
  show2 = false;
  show3 = false;
  show4 = false;

  ngOnInit() {
  }

  totalPrice(dist) {
    return dist.map(t => t.unitCost * t.qty).reduce((acc, value) => acc + value, 0);
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
      rep_id: data[0].repId,
      total_price: Math.floor(Math.floor(this.totalPrice(data) * 100)),
      dist_id: data[0].distributorId,
      weeklySet: data
    };
    send.weeklySet.forEach(set => {
      set.unitCost = Math.floor(set.unitCost * 100);
    });

    console.log(send, '1');
    this.show1 = !this.show1;
    setTimeout(() => { this._placeOrder.sendOrder(send).then((res) => {
      console.log(res);
    }); }, 500);

  }
  confirmOrders2(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].repId,
      total_price: Math.floor(this.totalPrice(data) * 100),
      dist_id: data[0].distributorId,
      weeklySet: data
    };
    send.weeklySet.forEach(set => {
      set.unitCost = Math.floor(set.unitCost * 100);
    });
    console.log(send, '2');
    this.show2 = !this.show2;
    setTimeout(() => {this._placeOrder.sendOrder(send).then((res) => {
      console.log(res);
    }); }, 500);

  }
  confirmOrders3(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].repId,
      total_price: Math.floor(this.totalPrice(data) * 100),
      dist_id: data[0].distributorId,
      weeklySet: data
    };
    send.weeklySet.forEach(set => {
      set.unitCost = Math.floor(set.unitCost * 100);
    });
    this.show3 = !this.show3;
    console.log(send, '3');
    setTimeout(() => {this._placeOrder.sendOrder(send).then((res) => {
      console.log(res);
    }); }, 500);

  }
  confirmOrders4(data) {
    const send = {
      admin_id: 1,
      type: 3,
      rep_id: data[0].repId,
      total_price: Math.floor(this.totalPrice(data) * 100),
      dist_id: data[0].distributorId,
      weeklySet: data
    };
    send.weeklySet.forEach(set => {
      set.unitCost = Math.floor(set.unitCost * 100);
    });
    console.log(send, '4');
    this.show4 = !this.show4;
    setTimeout(() => {this._placeOrder.sendOrder(send).then((res) => {
      console.log(res);
    }); }, 500);

  }
}
