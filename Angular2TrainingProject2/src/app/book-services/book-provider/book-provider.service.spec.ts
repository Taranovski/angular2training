import { TestBed, inject } from '@angular/core/testing';

import { BookProviderService } from './book-provider.service.ts';

describe('BookProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookProviderService]
    });
  });

  it('should ...', inject([BookProviderService], (service: BookProviderService) => {
    expect(service).toBeTruthy();
  }));
});
