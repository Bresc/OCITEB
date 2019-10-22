import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienC02Component } from './fac-cien-c02.component';

describe('FacCienC02Component', () => {
  let component: FacCienC02Component;
  let fixture: ComponentFixture<FacCienC02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienC02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienC02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
