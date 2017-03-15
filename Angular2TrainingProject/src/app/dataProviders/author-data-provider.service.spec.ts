import { TestBed, inject } from '@angular/core/testing';

import { AuthorDataProviderService } from './author-data-provider.service';

describe('AuthorDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorDataProviderService]
    });
  });

  it('should ...', inject([AuthorDataProviderService], (service: AuthorDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
