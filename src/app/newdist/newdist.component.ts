import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdist',
  templateUrl: './newdist.component.html',
  styleUrls: ['./newdist.component.css']
})
export class NewdistComponent implements OnInit {
  ngOnInit(){}

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
  }
}