import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
  deleteCategory(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>('http://localhost:8080/category/' + id);
  }
  addCategory(category: any): Observable<ICategory> {
    return this.http.post<ICategory>(
      'http://localhost:8080/category',
      category
    );
  }
  updateCategory(category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(
      `http://localhost:8080/category/${category._id}`,
      category
    );
  }
}
