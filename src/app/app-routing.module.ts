import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsComponent } from './core/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'service', component: HomeComponent},
  { path: 'product/:id', component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
