import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksDisplayComponent } from './books-display/books-display.component';
import {BookProviderService } from './book-provider/book-provider.service';
import {Book } from './domain/book';
import { BookDisplayComponent } from './book-display/book-display.component';

@NgModule({
  imports: [
    CommonModule, BooksDisplayComponent, BookProviderService, Book
  ],
  declarations: [
    BooksDisplayComponent,
    Book,
    BookDisplayComponent
  ],
})
export class BookServicesModule {
}
