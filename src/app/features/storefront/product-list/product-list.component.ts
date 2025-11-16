import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  categoryName: string;
  basePrice: number;
  primaryImage: string;
  totalStock: number;
  isActive: boolean;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  page = 0;
  size = 20;
  totalElements = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.apiService.get<any>(`/products?page=${this.page}&size=${this.size}`)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.products = response.data.content;
            this.totalElements = response.data.totalElements;
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading products:', error);
          this.loading = false;
        }
      });
  }

  onPageChange(page: number): void {
    this.page = page;
    this.loadProducts();
  }
}

