import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStepTwoComponent } from './invite-step-two.component';

describe('InviteStepTwoComponent', () => {
  let component: InviteStepTwoComponent;
  let fixture: ComponentFixture<InviteStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
