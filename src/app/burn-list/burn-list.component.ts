import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

export interface Burn {
  productName: string;
  previousVolume: number;
  currentVolume: number;
  burnCount: number;
}

const BOURBON_DATA: Burn [] = [
  {productName: 'Jack Daniels', previousVolume: 14, currentVolume: 8, burnCount: 4},
  {productName: 'Bulleit', previousVolume: 14, currentVolume: 6, burnCount: 4},
  {productName: 'Eagle Rare', previousVolume: 14, currentVolume: 8, burnCount: 2},
  {productName: 'Jim Beam', previousVolume: 14, currentVolume: 6, burnCount: 3},
  {productName: 'Old Forester', previousVolume: 14, currentVolume: 8, burnCount: 5},
  {productName: 'Blantons\'s', previousVolume: 11, currentVolume: 8, burnCount: 2},
];

const VODKA_DATA: Burn [] = [
  {productName: 'Tito\'s', previousVolume: 11, currentVolume: 8, burnCount: 4},
  {productName: 'Absolut', previousVolume: 11, currentVolume: 6, burnCount: 4},
  {productName: 'Smirnoff', previousVolume: 11, currentVolume: 8, burnCount: 2},
  {productName: 'Rain', previousVolume: 11, currentVolume: 6, burnCount: 3},
  {productName: 'Grey Goose', previousVolume: 11, currentVolume: 8, burnCount: 5},
  {productName: 'Stolichiniya', previousVolume: 11, currentVolume: 8, burnCount: 2},
];
@Component({
  selector: 'app-burn-list',
  templateUrl: './burn-list.component.html',
  styleUrls: ['./burn-list.component.css']
})
export class BurnListComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  show = false;

  // displayedColumns: string[] = ['productName', 'currentVolume', 'previousVolume', 'burnCount'];
  productB = BOURBON_DATA;
  productV = VODKA_DATA;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 4000 });
  }

  ngOnInit() {
  }

  toggleShow() {
    this.show = !this.show;
  }

}

