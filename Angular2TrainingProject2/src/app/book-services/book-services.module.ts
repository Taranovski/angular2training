import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksDisplayComponent } from './books-display/books-display.component';
import {BookProviderService } from './book-provider/book-provider.service';
import {Book } from './domain/book';

@NgModule({
  imports: [
    CommonModule, BooksDisplayComponent, BookProviderService, Book
  ],
  declarations: [
    BooksDisplayComponent,
    BookProviderService,
    Book],
  exports: [
    BooksDisplayComponent,
    BookProviderService,
    Book
  ]
})
export class BookServicesModule {
}
