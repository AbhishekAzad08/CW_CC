import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService  {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getProducts() {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/api/Product`);
  }
  public getProductsById(id: number) {    
    return this.httpClient.get<Product>(`${this.baseUrl}/api/Product/${id}`);
  }
  public deleteProductById(id: number) {    
    return this.httpClient.delete(`${this.baseUrl}/api/Product/${id}`);
  }
  public updateProductById(productId: number, product: Product) {    
    return this.httpClient.put<number>(`${this.baseUrl}/api/Product/${productId}`,product);
  }
  public addProduct( product: Product) {    
    return this.httpClient.post<Product>(`${this.baseUrl}/api/Product`,product);
  }
}
