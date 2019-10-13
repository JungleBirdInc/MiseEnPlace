import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetBottleByUPCService } from '../services/getbottlebyupc.service';
import { UpdateSingleBottleService } from '../services/updatesinglebottle.service';


@Component({
  selector: 'app-scale',
  styleUrls: ['./scale.component.css'],
  template: `
  <h3>Weigh Bottle</h3>
  <br />
  <h5>Scale Coming Soon</h5>
  <br />
  <div>{{code}}</div>
  <br />
  <h4 (click)='toggleManual()' >Manually Enter Weight</h4>
  <table *ngIf='manual'  class="mat-elevation-z8" width='100%'>
      <thead>
        <tr>
          <th>ProductName</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {{'product.name'}}
          </td>
          <td>
              <input type="text"
              value='enter weight'
              // [(ngModel)]="product.weight"
              contenteditable="true"/>
          </td>
        </tr>
      </tbody>

  </table>
  <button *ngIf='options' routerLink='scan-bar-code' >Scan Another Bottle</button> <button *ngIf='options' routerLink='burn' >Finish Weighing</button>
  `
})
export class ScaleComponent implements OnInit {
//   <tfoot>
//   <button (click)='updateBottle()'>Enter Weight</button>
// </tfoot>
  state$: Observable<object>;
  manual = false;
  options = false;
  code = window.history.state.barcode;
  public bottle;

constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public _getByUPC: GetBottleByUPCService,
    public _updateOpenBottle: UpdateSingleBottleService,
  ) { }

  ngOnInit() {
    // this._getByUPC.getBottleUPC(this.code)
    // .then(data => {
    //   this.bottle = data;
    //   console.log(data);
    // });
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
