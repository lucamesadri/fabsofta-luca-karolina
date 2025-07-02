import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAmizadeComponent } from './form-amizade.component';

describe('FormAmizadeComponent', () => {
  let component: FormAmizadeComponent;
  let fixture: ComponentFixture<FormAmizadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAmizadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAmizadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
