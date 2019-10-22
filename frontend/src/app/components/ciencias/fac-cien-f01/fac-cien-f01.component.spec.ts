import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienF01Component } from './fac-cien-f01.component';

describe('FacCienF01Component', () => {
  let component: FacCienF01Component;
  let fixture: ComponentFixture<FacCienF01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienF01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienF01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
