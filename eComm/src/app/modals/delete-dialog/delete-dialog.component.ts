import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  productToBeDeleted:Product;
  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,private dataService:DataService,
    @Inject(MAT_DIALOG_DATA) data) {
      this.productToBeDeleted=data;
   }

  ngOnInit(): void {
  }
  delete(){
    this.dataService.deleteProductById(this.productToBeDeleted.productId).subscribe();
  }
}
