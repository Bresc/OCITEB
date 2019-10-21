import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacAgroI06Component } from './fac-agro-i06.component';

describe('FacAgroI06Component', () => {
  let component: FacAgroI06Component;
  let fixture: ComponentFixture<FacAgroI06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacAgroI06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacAgroI06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
