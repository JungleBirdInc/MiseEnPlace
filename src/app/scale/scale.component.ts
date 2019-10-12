import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import { UpdateOpenBottlesService } from '../services/updateOpenBottles.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css']
})
export class ScaleComponent implements OnInit {
  state$: Observable<object>;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _updateOpenBottles: UpdateOpenBottlesService,
  ) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(() => window.history.state);
    console.log(this.state$);
  }

}
