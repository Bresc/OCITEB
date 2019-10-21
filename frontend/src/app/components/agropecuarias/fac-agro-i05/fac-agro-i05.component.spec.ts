import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacAgroI05Component } from './fac-agro-i05.component';

describe('FacAgroI05Component', () => {
  let component: FacAgroI05Component;
  let fixture: ComponentFixture<FacAgroI05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacAgroI05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacAgroI05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
