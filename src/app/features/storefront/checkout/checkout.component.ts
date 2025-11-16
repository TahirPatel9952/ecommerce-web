import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { loadStripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  loading = false;
  stripe: any;
  elements: StripeElements | null = null;
  cardElement: StripeCardElement | null = null;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: [''],
      couponCode: ['']
    });
  }

  async ngOnInit(): Promise<void> {
    // Initialize Stripe
    this.stripe = await loadStripe(environment.stripePublishableKey);
    if (this.stripe) {
      this.elements = this.stripe.elements();
      if (this.elements) {
        this.cardElement = this.elements.create('card');
        this.cardElement.mount('#card-element');
      }
    }
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.loading = true;
      
      const orderData = {
        shippingAddress: this.checkoutForm.value,
        couponCode: this.checkoutForm.value.couponCode || null
      };

      this.apiService.post<any>('/orders', orderData)
        .subscribe({
          next: async (response) => {
            if (response.success && response.data.paymentIntent && this.cardElement) {
              // Complete payment with Stripe
              const result = await this.stripe.confirmCardPayment(
                response.data.paymentIntent.clientSecret,
                {
                  payment_method: {
                    card: this.cardElement
                  }
                }
              );

              if (result.error) {
                console.error('Payment failed:', result.error);
                alert('Payment failed: ' + result.error.message);
              } else {
                // Payment succeeded
                this.router.navigate(['/orders', response.data.id]);
              }
            }
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Error creating order:', error);
            this.loading = false;
          }
        });
    }
  }
}

