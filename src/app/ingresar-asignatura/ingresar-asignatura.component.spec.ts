import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarAsignaturaComponent } from './ingresar-asignatura.component';

describe('IngresarAsignaturaComponent', () => {
  let component: IngresarAsignaturaComponent;
  let fixture: ComponentFixture<IngresarAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarAsignaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
