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
  <div>{{code}}</div>
  `
})
export class ScaleComponent implements OnInit {

  state$: Observable<object>;
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
    // this.state$ = this.activatedRoute.paramMap.pipe(() => window.history.state);
    this._getByUPC.getBottleUPC(this.code)
    .then(data => {
      this.bottle = data;
      console.log(data);
    });
    console.log(window.history.state.barcode);
  }

  show(){
    console.log(this.code);
  }

}
