import { Component, OnInit } from '@angular/core';

export interface OrderElement {
  productName: string;
  unitCost: number;
  volume: string;
  quantity: number;
   par: number;
}

const BOURBON_DATA: OrderElement [] = [
  {productName: 'Jack Daniels', unitCost: 11.42, volume: '750mL', quantity: 4, par: 5},
  {productName: 'Bulleit', unitCost: 11.42, volume: '1L', quantity: 4, par: 5},
  {productName: 'Eagle Rare', unitCost: 11.42, volume: '750mL', quantity: 2, par: 3},
  {productName: 'Jim Beam', unitCost: 11.42, volume: '1L', quantity: 3, par: 3},
  {productName: 'Old Forester', unitCost: 11.42, volume: '750mL', quantity: 5, par: 6},
  {productName: 'Blantons\'s', unitCost: 11.42, volume: '750mL', quantity: 2, par: 4},
];

const VODKA_DATA: OrderElement [] = [
  {productName: 'Tito\'s', unitCost: 9.47, volume: '750mL', quantity: 4, par: 5},
  {productName: 'Absolut', unitCost: 9.47, volume: '1L', quantity: 4, par: 5},
  {productName: 'Smirnoff', unitCost: 9.47, volume: '750mL', quantity: 2, par: 3},
  {productName: 'Rain', unitCost: 9.47, volume: '1L', quantity: 3, par: 3},
  {productName: 'Grey Goose', unitCost: 9.47, volume: '750mL', quantity: 5, par: 8},
  {productName: 'Stolichiniya', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }
  current = true;
  show = false;
  showInterior = false;
  showCurrent = true;

  displayedColumns: string[] = ['productName', 'volume', 'unitCost', 'quantity', 'par'];
  dataSource = BOURBON_DATA; // new MatTableDataSource<OrderElement>();
  dataSource2 = VODKA_DATA;

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
  }

  toggleCurrent() {
    this.current = !this.current;
  }

  toggleCurrentProduct() {
    this.showCurrent = !this.showCurrent;
  }

  toggleHist() {
    this.show = !this.show;
  }

  toggleProduct() {
    this.showInterior = !this.showInterior;
  }

}
