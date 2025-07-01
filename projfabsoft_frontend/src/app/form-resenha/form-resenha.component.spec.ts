import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResenhaComponent } from './form-resenha.component';

describe('FormResenhaComponent', () => {
  let component: FormResenhaComponent;
  let fixture: ComponentFixture<FormResenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
