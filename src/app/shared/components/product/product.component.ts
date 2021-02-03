import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Object;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {  
    this.activatedRoute.params.subscribe( params => {
    console.log(params.id);

    this.product = this.productService.getProduct(params.id);

    console.log(this.product);

  })}

  ngOnInit(): void {
  }

}
