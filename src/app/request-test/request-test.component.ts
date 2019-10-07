import { Component, OnInit } from '@angular/core';
import { NewdistributerService } from '../services/newdistributer.service';

@Component({
  selector: 'app-request-test',
  templateUrl: './request-test.component.html',
  styleUrls: ['./request-test.component.css']
})
export class RequestTestComponent implements OnInit {

  constructor(private _newdistributer: NewdistributerService) { }

  ngOnInit() {
    /* CODE FOR REQUEST*/
    this._newdistributer.getDistributers()
    .subscribe(data => {
    this.rawdata = data;
    });
  }
  
  public rawdata;

  onSubmit(){
    console.log(this.rawdata, 'RAW DATA');
  }
}
