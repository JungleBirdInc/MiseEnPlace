import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ConnectedPositioningStrategy,
  IgxDropDownComponent,
  IgxInputGroupComponent
} from 'igniteui-angular';

@Component({
  selector: 'app-inventory-wizard',
  templateUrl: './inventory-wizard.component.html',
  styleUrls: ['./inventory-wizard.component.css']
})
export class InventoryWizardComponent implements OnInit {

  @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
  @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' }
];

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

  constructor() { }

  ngOnInit() {
  }

}
