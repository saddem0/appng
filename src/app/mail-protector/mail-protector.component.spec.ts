import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailProtectorComponent } from './mail-protector.component';

describe('MailProtectorComponent', () => {
  let component: MailProtectorComponent;
  let fixture: ComponentFixture<MailProtectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailProtectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailProtectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
