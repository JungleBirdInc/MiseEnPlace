import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdistComponent } from './newdist.component';

describe('NewdistComponent', () => {
  let component: NewdistComponent;
  let fixture: ComponentFixture<NewdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
