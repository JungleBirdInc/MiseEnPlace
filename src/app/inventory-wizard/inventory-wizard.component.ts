import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ConnectedPositioningStrategy,
  IgxDropDownComponent,
  IgxInputGroupComponent
} from 'igniteui-angular';
import { FormBuilder, Form } from '@angular/forms';
// import { DistributorService } from '../services/distributor.service';
// import { InventoryWizardService } from '../services/inventoryWizard.service';

@Component({
  selector: 'app-inventory-wizard',
  templateUrl: './inventory-wizard.component.html',
  styleUrls: ['./inventory-wizard.component.css']
})
export class InventoryWizardComponent implements OnInit {

  constructor(
    private dist: FormBuilder,
    private setup: FormBuilder,
  ) { }

  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' }
];

newDistForm = this.dist.group({
distributor: [''],
repFirstName: [''],
repLastName: [''],
repCell: [''],
repEmail: [''],
});

inventoryWizardForm = this.setup.group({
brand: [''],
brandName: [''],
volume: [''],
category: [''],
subCategory: [''],
par: [''],
quantity: [''],
});

public openDropDown() {
  if (this.igxDropDown.collapsed) {
      this.igxDropDown.open({
          modal: false,
          positionStrategy: new ConnectedPositioningStrategy({
              target: this.inputGroup.element.nativeElement
          })
      });
  }
}


  ngOnInit() {
  }

  newDist(){
    console.log('new dist');
  }

}
