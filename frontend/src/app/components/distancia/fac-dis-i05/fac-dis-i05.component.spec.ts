import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDisI05Component } from './fac-dis-i05.component';

describe('FacDisI05Component', () => {
  let component: FacDisI05Component;
  let fixture: ComponentFixture<FacDisI05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacDisI05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDisI05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
