import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdistComponent } from './editdist.component';

describe( 'EditdistComponent', () => {
  let component: EditdistComponent;
  let fixture: ComponentFixture<EditdistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
