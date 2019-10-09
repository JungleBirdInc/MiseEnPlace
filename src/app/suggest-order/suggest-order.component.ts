import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

// implement check boxes to select which orders to sebd, need icons


const REP1_DATA = [
  {productName: 'Jack Daniels', unitCost: 10.17, volume: '750mL', quantity: 4, par: 5},
  {productName: 'Bulleit', unitCost: 10.17, volume: '1L', quantity: 4, par: 5},
  {productName: 'Eagle Rare', unitCost: 10.17, volume: '750mL', quantity: 2, par: 4},
  {productName: 'Jim Beam', unitCost: 10.17, volume: '1L', quantity: 3, par: 4},
  {productName: 'Old Forester', unitCost: 10.17, volume: '750mL', quantity: 5, par: 3},
  {productName: 'Blantons\'s', unitCost: 10.17, volume: '750mL', quantity: 2, par: 4},
];

@Component({
  selector: 'app-suggest-order',
  templateUrl: './suggest-order.component.html',
  styleUrls: ['./suggest-order.component.css']
})

export class SuggestOrderComponent implements OnInit {

  constructor(
    private router: Router
    ) {}

  show = false;

  rep1 = REP1_DATA;

ngOnInit() {}

/** Gets the total cost of all transactions. */
getTotalCost(rep) {
  return rep.map(t => t.price).reduce((acc, value) => acc + value, 0);
}

toggleShow() {
  this.show = !this.show;
}

confirmOrders() {
  this.router.navigate(['review-orders']);
}

suggestedOrder() {
  console.log('yerp');
}

}
