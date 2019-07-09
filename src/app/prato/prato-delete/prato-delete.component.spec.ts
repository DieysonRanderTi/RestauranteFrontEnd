import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoDeleteComponent } from './prato-delete.component';

describe('PratoDeleteComponent', () => {
  let component: PratoDeleteComponent;
  let fixture: ComponentFixture<PratoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
