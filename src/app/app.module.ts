import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({  

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
    ],
  declarations: [
    AppComponent,
    BookOrderComponent    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
