import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './data.service';
import { pastOrdersModel } from '../models/issue';

 

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent {
  name = 'Angular 5';
  displayedColumns = [
    'orderId',
    'surname',
    'name',
    'category',
    'subCategory',
    'quantity',
    'totalPrice',
  ];
  dataSource = new MatTableDataSource<pastOrdersModel>([]);

 

  constructor(private dataService: DataService) {}

 

  ngOnInit() {
    this.getUsersData();
  }

 

  getUsersData() {
    this.dataService.getData().subscribe((res) => {
      this.dataSource = new MatTableDataSource<pastOrdersModel>(res);
    });
  }
}

