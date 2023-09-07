import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { pastOrdersModel } from '../models/issue';
import { OrderService } from '../order.service';
import { EditDialogComponent } from '../dialogs/edit/edit-dialog.component';
import { categoryModel, subCategoryModel } from '../models';
import { DeleteDialogComponent } from '../dialogs/delete/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
 

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {
  name = 'Angular 5';
  displayedColumns = ['orderId','surname','name','category','subCategory','quantity','totalAmount','actions'];  
  dataSource = new MatTableDataSource<pastOrdersModel>([]);
  index: number;
  id: any;
  exampleDatabase: OrderService | null;

  constructor(private orderService: OrderService, public httpClient: HttpClient,
    public dialogService: MatDialog, public dataService: OrderService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit() {
    this.getOrdersData();
  }

  getOrdersData() {
    this.orderService.getOrders().subscribe((orders) => { // Use getOrders() from OrderService
      this.dataSource.data = orders;
    });
  }

  deleteItem(order:pastOrdersModel) {
    this.index = order.orderId;
    this.id = order.orderId;
    const dialogRef = this.dialogService.open(DeleteDialogComponent, {
      data: {order}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.orderId === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }
  
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  startEdit(order:pastOrdersModel) {
    this.id = order.orderId;
    // index row is used just for debugging proposes and can be removed
    this.index = order.orderId;
    console.log(this.index);
    const dialogRef = this.dialogService.open(EditDialogComponent, {
      data: {order}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.orderId === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

}


