import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStepOneComponent } from './invite-step-one.component';

describe('InviteStepOneComponent', () => {
  let component: InviteStepOneComponent;
  let fixture: ComponentFixture<InviteStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
