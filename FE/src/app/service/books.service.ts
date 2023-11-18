import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/product');
  }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:8080/product/' + id);
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8080/product/' + id);
  }
  addProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:8080/product', product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `http://localhost:8080/product/${product._id}`,
      product
    );
  }
}
