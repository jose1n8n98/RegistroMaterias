import { TestBed } from '@angular/core/testing';

import { IngresarAsignaturaService } from './ingresar-asignatura.service';

describe('IngresarAsignaturaService', () => {
  let service: IngresarAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresarAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
