import { Component, OnInit, Input } from '@angular/core';
import {Book} from './../domain/book';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksDisplayComponent implements OnInit {

  @Input() books:Book[];

  constructor() {
  }

  ngOnInit():void {
  }

}
