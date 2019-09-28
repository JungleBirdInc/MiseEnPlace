import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanInvoiceComponent } from './scan-invoice.component';

describe('ScanInvoiceComponent', () => {
  let component: ScanInvoiceComponent;
  let fixture: ComponentFixture<ScanInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
