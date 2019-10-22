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
  <h6 *ngIf='weight === undefined' class="smlTitle">< place bottle on scale ></h6>
  <h5 *ngIf='weight' class="smlTitle">{{weight.weight}} ounces</h5><br />

  <p class='category'>Product:</p><br />
  <input type="text" value={{targetBottle.distributors_product.product.product_name}} contenteditable="true" />
  <br /><br />

  <p class='category'>UPC:</p><br />
  <input type="text" value={{code}} contenteditable="true" />
  <br /><br />

  <p class='category'>Weight:</p><br />
  <input type="text" value={{this.weight.weight}} contenteditable="true" /> &nbsp;
  <button *ngIf='this.weight.weight !== 0' (click)='weighAgain()'>*Weigh again</button>
  <br /><br />

  <p class='category'>Prev. Weight:</p><br />
  {{ (targetBottle.weight / 100).toFixed(2) }}
  <br /><br />

  <button routerLink='/scan-bar-code'>Next Bottle</button> &nbsp; &nbsp;
  <button routerLink='/burn-list'>Finish</button>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  `
})
  // <p class='category'>Tare:</p><br />
  // {{ (targetBottle.distributors_product.product.tare / 100).toFixed(2) }}
  // <br />

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
      });

    this._getweight.getWeight()
    .then(data => {
      this.weight = data;
      console.log('WEIGHT', data);
    })
    .then(() => {
      this.weight.weight = (this.weight.weight / 100).toFixed(2);
    });
  }

  findBottle() {
    this.bottles.forEach(bottle => {
      if (bottle.distributors_product.product.upc === this.code) {
        this.targetBottle = bottle;
      }
    });
  }

  weighAgain() {
    this.weight.weight = undefined;

    this._getweight.getWeight()
      .then(data => {
        this.weight = data;
        console.log('WEIGHT', data);
      })
      .then(() => {
        this.weight.weight = (this.weight.weight / 100).toFixed(2);
      });
  }

}
