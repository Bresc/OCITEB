import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienF02Component } from './fac-cien-f02.component';

describe('FacCienF02Component', () => {
  let component: FacCienF02Component;
  let fixture: ComponentFixture<FacCienF02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienF02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienF02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
