import { Injectable } from '@angular/core';
import { producto } from '../models/Producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoServiceService {
  url = 'http://localhost:4000/api/productos'
  
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.url);
  }
}
