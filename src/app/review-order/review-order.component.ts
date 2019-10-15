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
  order = window.history.state.order;
  public _placeOrder = PostOrderService;

  displayedColumns: string[] = ['productName', 'subCategory', 'volume', 'quantity', 'price'];

  ngOnInit() {
    console.log(window.history.state.order);
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
    this.router.navigateByUrl('orders')
  }
}
