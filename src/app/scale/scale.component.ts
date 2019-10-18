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
  `<h4 class='titles'>Weigh Bottle</h4><br />
  <h4 *ngIf='weight === undefined' class="instruct" class="smlTitle">PLACE BOTTLE ON SCALE</h4>
  <h4 *ngIf='weight' class="smlTitle">{{weight.weight}} ounces</h4><br />

  PRODUCT: <br />
  UPC: <input value={{code}}><br />
  WEIGHT:  <input type="text" value={{this.weight.weight}} contenteditable="true" /><br />
  PRV. WEIGHT:<br />
  BASE TARE:<br />

  <button routerLink='scan-bar-code'>Scan Another Bottle</button> 
  <button routerLink='burn'>Finish Weighing</button>`
})

export class ScaleComponent implements OnInit {

  state$: Observable<object>;
  manual = false;
  options = false;
  code = window.history.state.barcode;
  public bottle;

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
        this.bottle = data;
        console.log('BOTTLE', data);
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

  toggleOptions() {
    this.options = !this.options;
  }

  updateBottle(id) {
    this._updateOpenBottle.updateOpenBottles(id);
    this.toggleOptions();
  }

  toggleManual(){
    this.manual = !this.manual;
  }
}
