import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestConnectorService } from 'src/app/services/rest-connector.service';
import { Product } from 'src/app/models/product.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  private restConnector = inject(RestConnectorService);

  productDetail: Product | undefined;

  constructor() {
    effect(() => this.productDetail = this.restConnector.productDetail());
  }

  ngOnInit() {

  }
}
