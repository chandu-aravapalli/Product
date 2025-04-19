# Product Store Application

This is an Angular application that demonstrates a product catalog with routing and detailed product views.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd product-app
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

To start the development server:

```bash
ng serve
```

The application will be available at:

- Default URL: `http://localhost:4200`
- If port 4200 is in use, the application will automatically use the next available port (e.g., 4201, 4202, etc.)

You can also specify a different port manually:

```bash
ng serve --port 4300
```

## Application Structure

- `/src/app/shared/components/`

  - `product-list/` - Displays the grid of products
  - `product-card/` - Individual product card component
  - `product-detail/` - Detailed view of a single product

- `/src/app/shared/services/`

  - `product.service.ts` - Handles product data management

- `/src/app/shared/models/`
  - `product.model.ts` - Product interface definition

## Routes

- `/products` - Main product listing page
- `/products/:id` - Detailed view of a specific product
- `/` - Redirects to `/products`
