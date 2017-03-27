import { Component,  EventEmitter, OnInit, Input, Output } from '@angular/core';
import {Book} from './../domain/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css'],
})
export class BookDisplayComponent implements OnInit {
  abstract;

  @Input() book:Book;
  @Output() idToDelete:EventEmitter<number>;

  constructor() {
    this.idToDelete = new EventEmitter<number>();
  }

  ngOnInit():void {
  }

  editEnabled:boolean = false;

  switchEdit():void {
    this.editEnabled = !this.editEnabled;
  }

  deleteThis():void {
    this.idToDelete.emit(this.book.id);
  }
}
