import { TestBed } from '@angular/core/testing';

import { IngresarHorarioService } from './ingresar-horario.service';

describe('IngresarHorarioService', () => {
  let service: IngresarHorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresarHorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
