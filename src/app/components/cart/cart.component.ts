import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  dataService = inject(DataService);

  totalSum = computed(() =>
    this.dataService.productsOnCart()
      .reduce((prev, curr) =>
        prev + (curr.price * curr.quantity), 0));

  deleteFromCart(id: number) {
    this.dataService.deleteItemFromCart(id);
  }
}
