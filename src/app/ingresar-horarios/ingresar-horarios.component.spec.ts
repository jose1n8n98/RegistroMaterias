import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarHorariosComponent } from './ingresar-horarios.component';

describe('IngresarHorariosComponent', () => {
  let component: IngresarHorariosComponent;
  let fixture: ComponentFixture<IngresarHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarHorariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
