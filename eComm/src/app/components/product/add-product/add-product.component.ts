import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessMessageComponent } from 'src/app/modals/success-message/success-message.component';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product;
  savedProduct:Product;
  selectedProductType: string;
  isActive: string
  public productDetails: FormGroup;
  productTypes: any = [
    { value: 'Book', viewValue: 'Book' },
    { value: 'Furniture', viewValue: 'Furniture' },
    { value: 'Food', viewValue: 'Food' },
    { value: 'Electronic', viewValue: 'Electronics' },
    { value: 'Toys', viewValue: 'Toys' }
  ];
  toggleOptions: any =[{value: true, viewValue: 'Active'},{value: false, viewValue: 'Inactive'}]
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cannot be more than 50 characters long' },
    ],
    'price': [
      { type: 'required', message: 'Price is required' },
      { type: 'pattern', message: 'Please enter a valid amount' },
    ],
    'type': [
      { type: 'required', message: 'Type is required' },
    ],
    'isActive': [
      { type: 'required', message: 'Please choose status' },
    ]
  }
  constructor(private dataService: DataService,public dialogService: DialogService,public router:Router) { }

  ngOnInit(): void {
    this.productDetails = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      price: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]),
      type: new FormControl('' ,[Validators.required]),
      isActive: new FormControl('', [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.productDetails.controls[controlName].hasError(errorName);
  }
  saveProduct(productDetails: any) {
    this.dataService.addProduct(productDetails).subscribe(
      (result) => { 
        this.savedProduct=result;
        if(this.savedProduct.productId!=null)
        this.dialogService.openDialog(this.router.navigate(['']),SuccessMessageComponent,{} );
      }
    );
  }
  get f() { return this.productDetails.controls; }
  
}
