import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvaliacaoComponent } from './form-avaliacao.component';

describe('FormAvaliacaoComponent', () => {
  let component: FormAvaliacaoComponent;
  let fixture: ComponentFixture<FormAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAvaliacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
