# E-Commerce Web Application

A modern, full-featured e-commerce web application built with Angular, featuring authentication, shopping cart, checkout with Stripe integration, and product management.

## 🚀 Features

### Customer Features
- **User Authentication** - Login and signup with JWT token-based authentication
- **Product Browsing** - View products with categories, descriptions, and pricing
- **Product Details** - Detailed product view with variant selection
- **Shopping Cart** - Add items to cart with quantity management
- **Checkout** - Secure checkout with Stripe payment integration
- **Responsive Design** - Mobile-friendly UI/UX

### Technical Features
- **Angular 15+** - Modern Angular framework
- **TypeScript** - Type-safe development
- **RxJS** - Reactive programming
- **HTTP Interceptors** - Automatic token injection and error handling
- **Route Guards** - Protected routes for authenticated users
- **Lazy Loading** - Optimized bundle size (ready for future modules)
- **Environment Configuration** - Separate dev and production configs

## 📋 Prerequisites

- Node.js (v18.x or higher)
- npm (v9.x or higher)
- Angular CLI (`npm install -g @angular/cli`)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/TahirPatel9952/ecommerce-web.git
cd ecommerce-web
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Update `src/environments/environment.ts` for development
   - Update `src/environments/environment.prod.ts` for production

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api/v1',
  stripePublishableKey: 'your_stripe_public_key'
};
```

## 🎯 Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🏗️ Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── guards/          # Route guards (AuthGuard)
│   │   ├── interceptors/    # HTTP interceptors (AuthInterceptor)
│   │   └── services/        # Core services (ApiService, AuthService)
│   ├── features/
│   │   ├── auth/           # Authentication (Login, Signup)
│   │   └── storefront/     # E-commerce features
│   │       ├── home/       # Home page
│   │       ├── product-list/     # Product listing
│   │       ├── product-detail/   # Product details
│   │       ├── cart/             # Shopping cart
│   │       └── checkout/         # Checkout & payment
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── environments/
│   ├── environment.ts      # Development config
│   └── environment.prod.ts # Production config
├── assets/                 # Static assets
└── styles.css             # Global styles
```

## 🔑 Key Components

### Authentication
- **Login/Signup** - User registration and authentication
- **JWT Token Management** - Automatic token storage and injection
- **Protected Routes** - Cart and checkout require authentication

### Product Management
- **Product Listing** - Grid view with pagination
- **Product Details** - Variant selection, quantity control
- **Add to Cart** - Integration with backend cart API

### Shopping Cart
- **Cart Management** - View, update, and remove items
- **Quantity Control** - Increment/decrement with stock validation
- **Real-time Updates** - Automatic cart total calculation

### Checkout
- **Shipping Address** - Form validation for address details
- **Stripe Integration** - Secure payment processing
- **Order Creation** - Backend order placement

## 🔐 API Integration

The application integrates with a Spring Boot backend API:

- **Base URL**: Configured in environment files
- **Authentication**: JWT Bearer token
- **Endpoints**:
  - `POST /auth/login` - User login
  - `POST /auth/signup` - User registration
  - `GET /products` - Get products list
  - `GET /products/{slug}` - Get product details
  - `GET /cart` - Get user's cart
  - `POST /cart/items` - Add item to cart
  - `PUT /cart/items/{id}` - Update cart item
  - `DELETE /cart/items/{id}` - Remove cart item
  - `POST /orders` - Create order

## 🎨 Styling

- **Custom CSS** - Modern, responsive design
- **Color Scheme** - Professional blue and green palette
- **Responsive Layout** - Mobile-first approach
- **Grid Layout** - CSS Grid for product listings
- **Flexbox** - Component-level layouts

## 🚦 Route Configuration

- `/` - Home page
- `/products` - Product listing
- `/products/:slug` - Product details
- `/cart` - Shopping cart (protected)
- `/checkout` - Checkout page (protected)
- `/login` - Login page
- `/signup` - Signup page

## 🛡️ Security Features

- **HTTP Interceptor** - Automatic token injection
- **Auth Guard** - Route protection
- **Token Expiry Handling** - Automatic logout on 401
- **XSS Protection** - Angular's built-in sanitization
- **CORS Support** - Configured for backend integration

## 📦 Dependencies

### Main Dependencies
- `@angular/core` - Angular framework
- `@angular/common` - Common Angular utilities
- `@angular/router` - Routing
- `@angular/forms` - Reactive and template-driven forms
- `@stripe/stripe-js` - Stripe payment integration
- `rxjs` - Reactive programming

### Dev Dependencies
- `@angular/cli` - Angular CLI tools
- `typescript` - TypeScript compiler
- `@angular-devkit/build-angular` - Build tools

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Tahir Patel**
- GitHub: [@TahirPatel9952](https://github.com/TahirPatel9952)

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Stripe for payment processing
- Community contributors

---

**Note**: This is the frontend application. The backend Spring Boot API is required for full functionality.

For backend repository: [ecommerce-backend](https://github.com/TahirPatel9952/cursor)
