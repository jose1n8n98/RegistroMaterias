import { TestBed } from '@angular/core/testing';

import { BuscarAsignaturaService } from './buscar-asignatura.service';

describe('BuscarAsignaturaService', () => {
  let service: BuscarAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
