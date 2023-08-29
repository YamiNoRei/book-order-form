import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule, Routes } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';
import { EditDialogComponent } from './dialogs/edit/edit.dialog.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { OpenSidebarOnSwipeDirective } from './open-sidebar-onswipe.directive';
import { PastMockDataService } from './past-mock-data.service';




const routes: Routes = [
  { path: '', component: BookOrderComponent }, //empty path before selection
  { path: 'new-order', component: BookOrderComponent },
  { path: 'past-orders', component: AppComponent }
];

@NgModule({  

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule
    ],

  declarations: [
    AppComponent,
    BookOrderComponent,
    PastOrdersComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    OpenSidebarOnSwipeDirective,
  ],
  providers: [
    PastMockDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
