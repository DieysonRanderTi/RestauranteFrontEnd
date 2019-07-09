import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoCreateComponent } from './prato-create.component';

describe('PratoCreateComponent', () => {
  let component: PratoCreateComponent;
  let fixture: ComponentFixture<PratoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
