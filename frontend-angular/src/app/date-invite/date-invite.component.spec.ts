import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInviteComponent } from './date-invite.component';

describe('DateInviteComponent', () => {
  let component: DateInviteComponent;
  let fixture: ComponentFixture<DateInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
