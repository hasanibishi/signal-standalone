import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { Menu } from './models/menu.model';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductsComponent, RouterModule, MatIconModule, MatBadgeModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private dataService = inject(DataService);

  cartProductsCount: number = 0;

  constructor() {
    effect(() => {
      this.cartProductsCount = this.dataService.productsOnCart().length;
    })

    this.dataService.getCartProducts();
  }

  menuList: Menu[] = [
    { label: 'Home', path: 'home' },
    { label: 'Products', path: 'products' },
    { label: 'Cart', path: 'cart' },
  ];
}
