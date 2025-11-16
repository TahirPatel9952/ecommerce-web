import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = null;
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.loading = true;
    this.apiService.get<any>('/cart')
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.cart = response.data;
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading cart:', error);
          this.loading = false;
        }
      });
  }

  updateQuantity(itemId: number, qty: number): void {
    this.apiService.put<any>(`/cart/items/${itemId}?qty=${qty}`, {})
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.cart = response.data;
          }
        },
        error: (error) => {
          console.error('Error updating cart:', error);
        }
      });
  }

  removeItem(itemId: number): void {
    this.apiService.delete<any>(`/cart/items/${itemId}`)
      .subscribe({
        next: () => {
          this.loadCart();
        },
        error: (error) => {
          console.error('Error removing item:', error);
        }
      });
  }
}

