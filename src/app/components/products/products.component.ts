import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, FormsModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  dataService = inject(DataService);

  selectedProduct: number = 0;

  getProductDetail(product: Product) {
    this.selectedProduct = product.id;

    product.quantity = this.dataService.productsOnCart()
      .find(p => p.id === product.id)?.quantity ?? 0;

    this.dataService.productDetail.set(product);
  }
}