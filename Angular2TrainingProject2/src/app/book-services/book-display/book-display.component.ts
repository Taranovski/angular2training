import { Component, OnInit, Input } from '@angular/core';
import {Book} from './../domain/book';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {

  @Input() book:Book;

  constructor() {
  }

  ngOnInit():void {
  }

}
