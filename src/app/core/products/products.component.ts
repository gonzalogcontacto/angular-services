import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductService, Product } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
        this.products = this.productService.getProducts();
  }

  seeProduct(idx: number) {
    this.router.navigate(['/product', idx]);
   }

}
