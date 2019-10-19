import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetBottleByUPCService } from '../services/getbottlebyupc.service';
import { UpdateSingleBottleService } from '../services/updatesinglebottle.service';
import { GetweightService } from '../services/getweight.service';

@Component({
  selector: 'app-scale',
  styleUrls: ['./scale.component.css'],
  template:
  `<h3 class='titles'>Weigh Bottle</h3><br />

<div class='container'>
  <h4 *ngIf='weight === undefined' class="smlTitle">PLACE BOTTLE ON SCALE</h4>
  <h4 *ngIf='weight' class="smlTitle">{{weight.weight}} ounces</h4><br />

  PRODUCT: {{targetBottle.distributors_product.product.product_name}} <br />
  UPC: {{code}} <br />
  WEIGHT:  <input type="text" value={{this.weight.weight}} contenteditable="true" />
  <button *ngIf='this.weight.weight !== 0' (click)='weighAgain()'>*Weigh again</button> <br />
  PRV. WEIGHT: {{(targetBottle.weight / 100).toFixed(2)}} <br />
  BASE TARE: {{(targetBottle.distributors_product.product.tare / 100).toFixed(2)}}<br />

  <button routerLink='../scan-bar-code'>Scan Another Bottle</button> 
  <button routerLink='../burn-list'>Finish Weighing</button>`
})

export class ScaleComponent implements OnInit {

  state$: Observable<object>;
  manual = false;
  options = false;
  code = window.history.state.barcode;
  public bottles;
  public targetBottle;

constructor(
    private _getweight: GetweightService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public _getByUPC: GetBottleByUPCService,
    public _updateOpenBottle: UpdateSingleBottleService,
  ) { }

  public weight;

  ngOnInit() {
    this._getByUPC.getBottleUPC(this.code)
      .then(data => {
        this.bottles = data;
        console.log('BOTTLES', data);
      })
      .then(() => {
        this.findBottle();
      })
    
    this._getweight.getWeight()
    .then(data => {
      this.weight = data;
      console.log('WEIGHT', data);
    })
    .then(() => {
      this.weight.weight = (this.weight.weight/100).toFixed(2);
    })
  }

  findBottle(){
    this.bottles.forEach(bottle => {
      if(bottle.distributors_product.product.upc === this.code){
        this.targetBottle = bottle;
      }
    });
  }

  weighAgain(){
    this.weight.weight = undefined;

    this._getweight.getWeight()
      .then(data => {
        this.weight = data;
        console.log('WEIGHT', data);
      })
      .then(() => {
        this.weight.weight = (this.weight.weight / 100).toFixed(2);
      })
  }

}
