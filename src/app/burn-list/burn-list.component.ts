import { Component, OnInit,  HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { GetOpenBottlesService } from '../services/getopenbottle.service';

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
  styleUrls: ['./burn-list.component.css'],
})
export class BurnListComponent implements OnInit {
  state$: Observable<object>;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public _getOpenBottles: GetOpenBottlesService,
  ) { }

  show = false;
  barcode: string;
  public inventory;
  displayedColumns: string[] = ['productName', 'currentVolume', 'previousVolume', 'burnCount'];
  productB = BOURBON_DATA;
  productV = VODKA_DATA;

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 4000 });
  }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(() => window.history.state);
    this._getOpenBottles.getOpenBottles()
      .then(data => {
        this.inventory = data;
        console.log(data);
      });
    console.log(this.state$);
  }

  toggleShow() {
    this.show = !this.show;
  }

  test() {
    console.log(this.barcode);
  }

}

