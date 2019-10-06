import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrepComponent } from './newrep.component';

describe('NewrepComponent', () => {
  let component: NewrepComponent;
  let fixture: ComponentFixture<NewrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
