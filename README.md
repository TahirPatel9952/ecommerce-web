# E-Commerce Platform - Web (Angular)

Angular web application for Bags and Cleaning Mops E-Commerce Platform.

## Tech Stack

- **Framework**: Angular 17
- **Language**: TypeScript
- **HTTP Client**: Angular HttpClient
- **Forms**: Angular Reactive Forms
- **Payment**: Stripe.js
- **Build**: Angular CLI

## Features

- ✅ User authentication (JWT)
- ✅ Product catalog browsing
- ✅ Shopping cart
- ✅ Checkout with Stripe integration
- ✅ Order history
- ✅ Admin panel (separate module)
- ✅ Responsive design

## Prerequisites

- Node.js 18+
- npm or yarn
- Angular CLI: `npm install -g @angular/cli`

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
Edit `src/environments/environment.ts` with your API URL and Stripe key.

3. Start development server:
```bash
ng serve
```

4. Open browser:
Navigate to http://localhost:4200

## Project Structure

```
web/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/        # Route guards
│   │   │   ├── interceptors/  # HTTP interceptors
│   │   │   └── services/      # Core services (Auth, API)
│   │   ├── features/
│   │   │   ├── storefront/    # Customer-facing pages
│   │   │   ├── admin/          # Admin panel
│   │   │   └── auth/           # Login/Signup
│   │   └── shared/             # Shared components
│   ├── assets/                 # Static assets
│   └── environments/           # Environment configs
├── angular.json
└── package.json
```

## Key Components

### Storefront
- `HomeComponent` - Landing page
- `ProductListComponent` - Product catalog
- `ProductDetailComponent` - Product details
- `CartComponent` - Shopping cart
- `CheckoutComponent` - Checkout with Stripe

### Admin
- `DashboardComponent` - Admin dashboard
- `ProductManagementComponent` - CRUD for products
- `OrderManagementComponent` - Order management
- `UserManagementComponent` - User management

## Services

### AuthService
Handles authentication, token management, and user session.

### ApiService
Centralized HTTP client with automatic token injection.

## Environment Configuration

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1',
  stripePublishableKey: 'pk_test_...'
};
```

## Building

Build for production:
```bash
ng build --configuration production
```

Output will be in `dist/ecommerce-web/`

## Testing

Run unit tests:
```bash
ng test
```

Run e2e tests (if configured):
```bash
ng e2e
```

## TODO

- [ ] Complete admin panel implementation
- [ ] Add product image upload
- [ ] Implement order tracking
- [ ] Add product reviews/ratings
- [ ] Implement search and filters
- [ ] Add pagination
- [ ] Add loading states and error handling
- [ ] Implement responsive design
- [ ] Add unit tests
- [ ] Add e2e tests with Cypress

## Integration with Backend

The Angular app consumes the Spring Boot REST API. Ensure:
1. Backend is running on configured `apiUrl`
2. CORS is properly configured in backend
3. JWT tokens are stored in localStorage
4. Auth interceptor adds token to all requests

## Stripe Integration

1. Get Stripe publishable key from Stripe dashboard
2. Add to `environment.ts`
3. Stripe Elements are initialized in `CheckoutComponent`
4. Payment confirmation happens after order creation

## License

Proprietary - All rights reserved

