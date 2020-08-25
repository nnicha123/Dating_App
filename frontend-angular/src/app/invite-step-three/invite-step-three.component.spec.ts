import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStepThreeComponent } from './invite-step-three.component';

describe('InviteStepThreeComponent', () => {
  let component: InviteStepThreeComponent;
  let fixture: ComponentFixture<InviteStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
