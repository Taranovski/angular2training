import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookServicesModule, BookProviderService, BooksDisplayComponent, BookDisplayComponent, Book } from './book-services';

@NgModule({
  declarations: [
    AppComponent,
    BooksDisplayComponent,
    BookDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookProviderService],
  bootstrap: [AppComponent]
})
export class AppModule  {
}
