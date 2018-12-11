import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any[];
  constructor(pservice:ProductsService) {
    this.products = pservice.getProducts();
   }

  ngOnInit() {
  }

}
