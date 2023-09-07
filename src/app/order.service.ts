import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { bookOrderModel } from './models'; // Adjust the path to the correct model

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   
  private orders: bookOrderModel[] = []; // Initialize the orders array
  private ordersSubject: BehaviorSubject<bookOrderModel[]> = new BehaviorSubject<bookOrderModel[]>([]);
  dataChange: BehaviorSubject<bookOrderModel[]> = new BehaviorSubject<bookOrderModel[]>([]);  // Temporarily stores data from dialogs
  dialogData: any;

  constructor() {}

  submitOrder(order: bookOrderModel) {
    this.orders.push(order);
    this.ordersSubject.next(this.orders);
  }

  getOrders(): Observable<bookOrderModel[]> {
    return this.ordersSubject.asObservable();
  }

  updateIssue(issue: bookOrderModel): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }

  getDialogData(): bookOrderModel {
    return this.dialogData;
  }  
}

