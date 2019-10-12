import { Component, OnInit } from '@angular/core';
import { GetordersService } from '../services/getorders.service';

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
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private _getorders: GetordersService) { }

  public items: string[] = ['Distributer', 'Date', 'Invoice Number', ];

  show = false;

  displayedColumns: string[] = ['productName', 'subCategory', 'volume', 'quantity', 'price'];
  rep1 = REP1_DATA;

  public orders;

  ngOnInit() {
    this._getorders.getOrders()
      .subscribe(data => {
        this.orders = data;
        console.log('orders response', data);
      });
  }

  onSubmit() {
    console.log('submit');
  }

  getTotalCost(rep) {
    return rep.map(t => t.unitCost * t.ordered).reduce((acc, value) => acc + value, 0);
  }

  toggleShow() {
    this.show = !this.show;
  }
}
