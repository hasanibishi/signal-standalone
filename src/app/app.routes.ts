import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('../app/components/home/home.component').then(m => m.HomeComponent) },
    { path: 'products', loadComponent: () => import('../app/components/products/products.component').then(m => m.ProductsComponent) },
    { path: 'cart', loadComponent: () => import('../app/components/cart/cart.component').then(m => m.CartComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
