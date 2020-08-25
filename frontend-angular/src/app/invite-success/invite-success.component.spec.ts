import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSuccessComponent } from './invite-success.component';

describe('InviteSuccessComponent', () => {
  let component: InviteSuccessComponent;
  let fixture: ComponentFixture<InviteSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
