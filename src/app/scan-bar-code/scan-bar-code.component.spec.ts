import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanBarCodeComponent } from './scan-bar-code.component';

describe('ScanBarCodeComponent', () => {
  let component: ScanBarCodeComponent;
  let fixture: ComponentFixture<ScanBarCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanBarCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanBarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
