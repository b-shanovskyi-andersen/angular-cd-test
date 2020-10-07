import { TestBed } from '@angular/core/testing';

import { ServiceWithoutInjectService } from './service-without-inject.service';

describe('ServiceWithoutInjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceWithoutInjectService = TestBed.get(ServiceWithoutInjectService);
    expect(service).toBeTruthy();
  });
});
