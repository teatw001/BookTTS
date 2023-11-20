import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/model';

@Injectable({
  providedIn: 'root',
})
export class CateService {
  constructor(private http: HttpClient) {}
  getCategorys(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://localhost:8080/category');
  }
  getCategory(id: any): Observable<ICategory> {
    return this.http.get<ICategory>('http://localhost:8080/category/' + id);
  }
  deleteCategory(id: number | string,token: string): Observable<ICategory> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<ICategory>('http://localhost:8080/category/' + id,{
      headers,
    });
  }
  addCategory(category: any,token: string): Observable<ICategory> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ICategory>(
      'http://localhost:8080/category',
      category,{
        headers,
      }
    );
  }
  updateCategory(category: ICategory,token: string): Observable<ICategory> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<ICategory>(
      `http://localhost:8080/category/${category._id}`,
      category,{
        headers,
      }
    );
  }
}
