import { Component, OnDestroy, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnDestroy {
  dataService = inject(DataService);

  addToCart() {
    const exists = this.cartProductsSignal().find(x => x.id === this.detailSignal()!.id);

    if (exists) {
      exists.quantity += 1;
    } else {
      this.detailSignal()!.quantity = 1;
      this.cartProductsSignal.mutate(cartProducts => cartProducts.push(this.detailSignal()!));
    }
  }

  changeQuantity(increase: boolean) {
    this.cartProductsSignal.update(products => {
      const foundProduct = products.find(x => x.id === this.detailSignal()!.id);

      if (foundProduct) {
        increase ? foundProduct.quantity += 1 : foundProduct.quantity -= 1;

        this.detailSignal.set(foundProduct);
      }

      return products;
    })
  }

  get detailSignal(): WritableSignal<Product | undefined> {
    return this.dataService.productDetail;
  }

  get cartProductsSignal(): WritableSignal<Product[]> {
    return this.dataService.productsOnCart;
  }

  ngOnDestroy(): void {
    this.dataService.productDetail.set(undefined);
  }
}
