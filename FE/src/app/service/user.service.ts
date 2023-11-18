import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8080/user');
  }
  getUser(id: any): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:8080/user/' + id);
  }
  deleteUser(id: number | string): Observable<IUser> {
    return this.http.delete<IUser>('http://localhost:8080/user/' + id);
  }
  addUser(user: any): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:8080/user', user);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`http://localhost:8080/user/${user._id}`, user);
  }
}
