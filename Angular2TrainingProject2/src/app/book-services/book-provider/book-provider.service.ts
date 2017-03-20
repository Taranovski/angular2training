import { Injectable } from '@angular/core';
import { Book } from './../domain/book';

@Injectable()
export class BookProviderService {

  public books:Book[] = [
    new Book("Design Patterns", "programming", "code design", new Date("10.10.1995"), ["Gamma", "Rivest"]),
    new Book("JLS 7", "programming", "language specification", new Date("9.10.2010"), ["Gosling"]),
    new Book("JVMS 7", "programming", "vm specification", new Date("5.10.2010"), ["Gosling", "Rivest"]),
  ]

}
