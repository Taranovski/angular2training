import { Component } from '@angular/core';
import { BookServicesModule, BookProviderService, BooksDisplayComponent, BookDisplayComponent, Book } from './book-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private books:Book[];

  constructor(public bookProducer:BookProviderService) {
  }

  ngOnInit():void {
    this.books = this.bookProducer.getSomeBooks();
  }
}
