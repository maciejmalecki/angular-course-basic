import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksDetailsComponent } from './components/books-details/books-details.component';
import {FormsModule} from "@angular/forms";
import { BookListComponent } from './components/book-list/book-list.component';
import {BooksService} from "./services/books.service";



@NgModule({
  declarations: [
    BooksDetailsComponent,
    BookListComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    BooksDetailsComponent,
    BookListComponent
  ],
  providers: [BooksService]
})
export class BooksModule { }
