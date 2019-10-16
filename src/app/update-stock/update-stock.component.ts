import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { GetCurrentInvService } from '../services/getcurrentinventory.service';

export interface UpdateInventory {
  productName: string;
  unitCost: number;
  volume: string;
  quantity: number;
   par: number;
}

const BOURBON_DATA: UpdateInventory [] = [
  {productName: 'Jack Daniels', unitCost: 11.42, volume: '750mL', quantity: 4, par: 6},
  {productName: 'Bulleit', unitCost: 11.42, volume: '1L', quantity: 4, par: 5},
  {productName: 'Eagle Rare', unitCost: 11.42, volume: '750mL', quantity: 2, par: 2},
  {productName: 'Jim Beam', unitCost: 11.42, volume: '1L', quantity: 3, par: 5},
  {productName: 'Old Forester', unitCost: 11.42, volume: '750mL', quantity: 5, par: 8},
  {productName: 'Blantons\'s', unitCost: 11.42, volume: '750mL', quantity: 2, par: 3},
];

const VODKA_DATA: UpdateInventory [] = [
  {productName: 'Tito\'s', unitCost: 9.47, volume: '750mL', quantity: 4, par: 4},
  {productName: 'Absolut', unitCost: 9.47, volume: '1L', quantity: 4, par: 5},
  {productName: 'Smirnoff', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
  {productName: 'Rain', unitCost: 9.47, volume: '1L', quantity: 3, par: 3},
  {productName: 'Grey Goose', unitCost: 9.47, volume: '750mL', quantity: 5, par: 7},
  {productName: 'Stolichiniya', unitCost: 9.47, volume: '750mL', quantity: 2, par: 4},
];

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public _getInv: GetCurrentInvService
  ) { }

  show = false;

  // displayedColumns: string[] = ['productName', 'volume', 'unitCost', 'quantity', 'par'];
  productB = BOURBON_DATA;
  productV = VODKA_DATA;

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, { duration: 4000 });
  // }


  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
  }

}
