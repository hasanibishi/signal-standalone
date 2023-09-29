import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestConnectorService } from 'src/app/services/rest-connector.service';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private restConnector = inject(RestConnectorService);

  products!: Observable<Product[]>;

  selectedProduct: number = 0;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.restConnector.getProducts();
  }

  getProductDetail(product: Product) {
    this.selectedProduct = product.id;
    this.restConnector.productDetail.set(product);
  }
}
