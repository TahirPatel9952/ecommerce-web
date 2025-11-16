import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = null;
  loading = false;
  addingToCart = false;
  selectedVariantId: number | null = null;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.loadProduct(slug);
    }
  }

  loadProduct(slug: string): void {
    this.loading = true;
    this.apiService.get<any>(`/products/${slug}`)
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.product = response.data;
            // If product has variants, select the first one by default
            if (this.product.variants && this.product.variants.length > 0) {
              this.selectedVariantId = this.product.variants[0].id;
            }
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading product:', error);
          this.loading = false;
        }
      });
  }

  addToCart(): void {
    if (!this.selectedVariantId) {
      alert('Please select a product variant');
      return;
    }

    this.addingToCart = true;
    const cartItemRequest = {
      productVariantId: this.selectedVariantId,
      qty: this.quantity
    };

    this.apiService.post<any>('/cart/items', cartItemRequest)
      .subscribe({
        next: (response) => {
          if (response.success) {
            alert('Item added to cart successfully!');
            // Optionally redirect to cart
            // this.router.navigate(['/cart']);
          }
          this.addingToCart = false;
        },
        error: (error) => {
          console.error('Error adding to cart:', error);
          if (error.status === 401) {
            alert('Please login to add items to cart');
            this.router.navigate(['/login']);
          } else {
            alert('Failed to add item to cart. Please try again.');
          }
          this.addingToCart = false;
        }
      });
  }

  onVariantChange(event: any): void {
    const variantId = Number(event.target.value);
    if (!isNaN(variantId)) {
      this.selectedVariantId = variantId;
    }
  }

  incrementQuantity(): void {
    if (this.quantity < this.product.totalStock) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}

