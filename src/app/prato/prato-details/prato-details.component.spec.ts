import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoDetailsComponent } from './prato-details.component';

describe('PratoDetailsComponent', () => {
  let component: PratoDetailsComponent;
  let fixture: ComponentFixture<PratoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
