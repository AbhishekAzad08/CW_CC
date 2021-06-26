import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: '#', component: ListProductsComponent },
  { path: 'add', component: AddProductComponent },
{ path: 'edit/:id', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
