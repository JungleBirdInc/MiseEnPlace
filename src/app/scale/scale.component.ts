import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetBottleByUPCService } from '../services/getbottlebyupc.service';
import { UpdateOpenBottlesService } from '../services/updateOpenBottles.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css'],
  template: `
  <h3>Weigh Bottle</h3>
  <br />
  <h5>Scale Coming Soon</h5>
  <br />
  <div>{{code}}</div>
  <br />
  <h4 (click)='!manual' >Manually Enter Weight</h4>
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
            <input type="text" 
            value='product.name'
            // [(ngModel)]="product.name" 
            [disabled]="!product.isEditable"/>
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
  `
})
export class ScaleComponent implements OnInit {

  state$: Observable<object>;
  manual = false;
  code = window.history.state.barcode;
//   navigation = this.router.getCurrentNavigation();
// this.barcode = navigation.extras.state.barcode;
  public bottle;

constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    public _getByUPC: GetBottleByUPCService,
    public _updateOpenBottles: UpdateOpenBottlesService,
  ) { }

ngOnInit() {
    // this._getByUPC.getBottleUPC(this.code)
    // .then(data => {
    //   this.bottle = data;
    //   console.log(data);
    // });
  }


}
