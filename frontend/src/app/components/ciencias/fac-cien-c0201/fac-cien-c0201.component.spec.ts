import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienC0201Component } from './fac-cien-c0201.component';

describe('FacCienC0201Component', () => {
  let component: FacCienC0201Component;
  let fixture: ComponentFixture<FacCienC0201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienC0201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienC0201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
