import { Component, OnInit } from '@angular/core';
import { NewdistributerService } from '../services/newdistributer.service';

@Component({
  selector: 'app-newdist',
  templateUrl: './newdist.component.html',
  styleUrls: ['./newdist.component.css']
})
export class NewdistComponent implements OnInit {
  constructor(private _newdistributer: NewdistributerService) { }

  ngOnInit() {
    this._newdistributer.getDistributers()
      .subscribe(data => {
        this.rawdata = data;
        this.distributers = data
      });
  }

  public distributers = [];
  public rawdata;
  
  public distributer = {
    name: undefined,
    address: undefined,
    state: undefined,
    zip: undefined,
  };

  public onSubmit() {
    console.log(`submitted: 
    ${this.distributer.name}
    ${this.distributer.address}
    ${this.distributer.state}
    ${this.distributer.zip}`);

    console.log(this.rawdata, 'raw data');
    console.log(this.distributers, 'distributers');
  }
}