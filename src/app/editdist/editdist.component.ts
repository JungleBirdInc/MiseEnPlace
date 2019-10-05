import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editdist',
  templateUrl: './editdist.component.html',
  styleUrls: ['./editdist.component.css']
})
export class EditdistComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
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
