import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOrderComponent } from './book-order/book-order.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';

const routes: Routes = [
  { path: '', component: BookOrderComponent }, //empty path before selection
  { path: 'new-order', component: BookOrderComponent },
  { path: 'past-orders', component: PastOrdersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRouting = RouterModule.forRoot(routes);