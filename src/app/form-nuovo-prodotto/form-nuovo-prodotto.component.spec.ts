import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuovoProdottoComponent } from './form-nuovo-prodotto.component';

describe('FormNuovoProdottoComponent', () => {
  let component: FormNuovoProdottoComponent;
  let fixture: ComponentFixture<FormNuovoProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuovoProdottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuovoProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
