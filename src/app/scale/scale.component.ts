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
  `<h3>Weigh Bottle</h3>
    <br />

    <div>
      <h4 *ngIf='weight === undefined'>PLACE BOTTLE ON SCALE</h4>
      <h4 *ngIf='weight'>{{weight.weight}}</h4>
    </div><br />
    UPC: <input value={{code}}>

    <br />

    <table *ngIf='manual' width='100%'>
      <thead>
        <tr>
          <th>ProductName</th>
          <th>Weight</th>
        </tr>
      </thead>

      <tbody>
      <tr>
        <td>
          Prod name
        </td>
          <td>
            <input type="text" value='enter weight' contenteditable="true" />
          </td>
        </tr>
      </tbody>

    </table>
    <button *ngIf='options' routerLink='scan-bar-code'>Scan Another Bottle</button> 
    <button *ngIf='options' routerLink='burn'>Finish Weighing</button>`

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
    this._getweight.getWeight()
    .then(data => {
      let temp = data;
      this.weight= temp;
      console.log('WEIGHT', data);
    });
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
