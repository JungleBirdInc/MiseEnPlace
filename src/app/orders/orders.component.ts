import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public items: string[] = ["Distributer", "Date", "Invoice Number",];

  onSubmit(){
    console.log('submit');
  }
}
