import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSuccessComponent } from './location-success.component';

describe('LocationSuccessComponent', () => {
  let component: LocationSuccessComponent;
  let fixture: ComponentFixture<LocationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
