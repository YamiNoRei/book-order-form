import { Injectable } from '@angular/core';
import { pastOrders } from './past-mock-data';
import { Observable, of } from 'rxjs';
import { pastOrdersModel } from './models/issue';

@Injectable({
  providedIn: 'root'
})
export class PastMockDataService {
  dataChange: any;  
  data: any;

  updateIssue(data: any) {
    throw new Error('Method not implemented.');
  }
  getAllpastOrdersModels() {
    throw new Error('Method not implemented.');
  }
  getDialogData(): any {
    throw new Error('Method not implemented.');
  }
 
  getMockData(): Observable<pastOrdersModel[]> {
    console.log(pastOrders);    
    return of(pastOrders);
  }
}
