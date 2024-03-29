import { Component, OnInit } from '@angular/core';
import { GetdistService } from '../services/getdist.service';

@Component({
  selector: 'app-getdist',
  templateUrl: './getdist.component.html',
  styleUrls: ['./getdist.component.css']
})
export class GetdistComponent implements OnInit {

  constructor(private _getdist: GetdistService) { }

  ngOnInit() {
    this._getdist.getDistributors()
    .then(data => {
    this.distributors = data;
    });
  }
  
  public distributors;

  onSubmit(){
    console.log(this.distributors, 'DISTRIBUTORS');
  }
}
