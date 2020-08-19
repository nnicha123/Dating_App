import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFailComponent } from './register-fail.component';

describe('RegisterFailComponent', () => {
  let component: RegisterFailComponent;
  let fixture: ComponentFixture<RegisterFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
