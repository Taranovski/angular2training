import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Book} from './../domain/book';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css'],
})
export class BooksDisplayComponent implements OnInit {
  abstract;

  @Input() books:Book[];

  @Output() idToDelete:EventEmitter<number>;

  constructor() {
    this.idToDelete = new EventEmitter<number>();
  }

  ngOnInit():void {
  }

  deleteById(id:number) {
    this.idToDelete.emit(id);
  }
}
