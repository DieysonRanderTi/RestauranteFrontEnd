import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDeleteComponent } from './restaurante-delete.component';

describe('RestauranteDeleteComponent', () => {
  let component: RestauranteDeleteComponent;
  let fixture: ComponentFixture<RestauranteDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
