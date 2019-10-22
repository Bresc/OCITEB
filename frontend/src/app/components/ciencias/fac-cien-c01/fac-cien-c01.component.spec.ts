import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienC01Component } from './fac-cien-c01.component';

describe('FacCienC01Component', () => {
  let component: FacCienC01Component;
  let fixture: ComponentFixture<FacCienC01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienC01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienC01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
