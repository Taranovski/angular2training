import { Injectable } from '@angular/core';

@Injectable()
export class AuthorDataProviderService {

  constructor() { }

  getSomeData():Array<string> {
    return ["first", "second"]
  }
}
