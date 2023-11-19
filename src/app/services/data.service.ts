import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductRoot } from '../models/product.model';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  private cartEff = effect(() => {
    localStorage.setItem('productsOnCart', JSON.stringify(this.productsOnCart()))
  })

  productDetail = signal<Product | undefined>(undefined);

  productsOnCart = signal<Product[]>([]);

  getProducts = toSignal(this.http.get<ProductRoot>('https://dummyjson.com/products')
    .pipe(map(response => response.products)));

  getCartProducts(): void {
    const data = localStorage.getItem('productsOnCart');

    if (!data) return;

    this.productsOnCart.set(JSON.parse(data));
  }

  deleteItemFromCart(id: number) {
    const index = this.productsOnCart().map(x => x.id).indexOf(id);

    if (index != -1) {
      this.productsOnCart().splice(index, 1);
    }
  }
}
