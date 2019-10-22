import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienI05Component } from './fac-cien-i05.component';

describe('FacCienI05Component', () => {
  let component: FacCienI05Component;
  let fixture: ComponentFixture<FacCienI05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienI05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienI05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
