import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestOrderComponent } from './suggest-order.component';

describe('SuggestOrderComponent', () => {
  let component: SuggestOrderComponent;
  let fixture: ComponentFixture<SuggestOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
