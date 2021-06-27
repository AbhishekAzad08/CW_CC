import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SuccessMessageComponent } from 'src/app/modals/success-message/success-message.component';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product();
  selectedProductId: number;
  public productDetails: FormGroup;
  productTypes: any = [
    { value: 'Book', viewValue: 'Book' },
    { value: 'Furniture', viewValue: 'Furniture' },
    { value: 'Food', viewValue: 'Food' },
    { value: 'Electronic', viewValue: 'Electronics' },
    { value: 'Toys', viewValue: 'Toys' }
  ];
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
  toggleOptions: any = [{ value: true, viewValue: 'Active' }, { value: false, viewValue: 'Inactive' }]
  constructor(private dataService: DataService, private route: ActivatedRoute, public dialogService: DialogService, private router: Router) {
    this.route.params.subscribe((params: Params) => this.selectedProductId = params['id'])
  }

  ngOnInit(): void {

    this.productDetails = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]),
      type: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
    });
    this.dataService.getProductsById(this.selectedProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.productDetails.controls[controlName].hasError(errorName);
  }
  saveProduct() {
    this.dataService.updateProductById(this.selectedProductId, this.product).subscribe(
      (result) => {
        if (result == 1)
          this.dialogService.openDialog(this.router.navigate(['']), SuccessMessageComponent, {});
      }
    );
  }
  get f() { return this.productDetails.controls; }


}
