import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhaComponent } from './resenha.component';

describe('ResenhaComponent', () => {
  let component: ResenhaComponent;
  let fixture: ComponentFixture<ResenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
