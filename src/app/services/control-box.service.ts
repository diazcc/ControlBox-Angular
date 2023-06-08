import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlBoxService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users/'; // URL de la API

  constructor(private http: HttpClient) {}

  // Método para realizar una solicitud GET
  getUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para realizar una solicitud get
  getUserId(data: any): Observable<any> {
    return this.http.get<any>(this.apiUrl+data);
  }

  // Método para realizar una solicitud post
  setUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  // Método para realizar una solicitud put
  updateUser(data: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+data.id,data);
  }
  // Método para realizar una solicitud delete
  deleteUser(data: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl+data);
  }

}
