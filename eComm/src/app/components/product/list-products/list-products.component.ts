import { Component, AfterViewInit,ViewChild, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { Product } from 'src/app/models/product';
import { ProductType } from 'src/app/enums/productType';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatSortable} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/modals/delete-dialog/delete-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements AfterViewInit,OnInit,OnDestroy  {

  subscriptions:Subscription[]=[];
  displayedColumns: string[] = ['name', 'price', 'type', 'isActive','action'];
  dataSource =new   MatTableDataSource<Product>();

  constructor(private router:Router,public dialogService: DialogService,private dataService:DataService){  }
  
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;
  @ViewChild(MatSort) 
  sort: MatSort;

  ngOnInit(){
    this.myLoadingFunction();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sort(({ id: 'name', start: 'asc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub=>{
      if(!sub.closed)
      sub.unsubscribe();
    })
  }
  action(action,element:Product){
    if(action=='edit')
    {
      this.router.navigate(['/edit',element.productId]);
    }
    else
    this.dialogService.openDialog(this.myLoadingFunction,DeleteDialogComponent,element);
  }
   myLoadingFunction=() : void=>{
    let subscription= this.dataService.getProducts().subscribe(things => {
      this.dataSource = new MatTableDataSource(things);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });
      this.subscriptions.push(subscription);
  }
  
}

