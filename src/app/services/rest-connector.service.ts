import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductRoot } from '../models/product.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestConnectorService {

  private http = inject(HttpClient);

  productDetail = signal<Product | undefined>(undefined);

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductRoot>('https://dummyjson.com/products')
      .pipe(map(response => response.products));
  }
}
