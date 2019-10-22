import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienI02Component } from './fac-cien-i02.component';

describe('FacCienI02Component', () => {
  let component: FacCienI02Component;
  let fixture: ComponentFixture<FacCienI02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienI02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienI02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
