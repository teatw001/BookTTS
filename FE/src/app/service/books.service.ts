import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  deleteProduct(id: number | string, token: any): Observable<IProduct> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<IProduct>(`${this.apiUrl}/${id}`, {
      headers,
    });
  }

  addProduct(product: any, token: string): Observable<IProduct> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<IProduct>(this.apiUrl, product, { headers });
  }

  updateProduct(product: IProduct, token: any): Observable<IProduct> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<IProduct>(`${this.apiUrl}/${product._id}`, product, {
      headers,
    });
  }
}
