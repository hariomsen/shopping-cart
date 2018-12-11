import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [
    CartService
  ]
})
export class CartComponent implements OnInit {
  cartList: any[];
  total:any={};
  constructor() {
    this.cartList = CartService.cartList;
    this.total = CartService.total
  }

  ngOnInit() {
  }
  setFinalAmout() {
    CartService.getTotalCount();
    CartService.getTotal();
  }
  addQty(item) {
    item.count = item.count + 1;
    this.setFinalAmout();
  }
  removeQty(item) {
    if (item.count <= 1)
      return;
    item.count = item.count - 1;
    this.setFinalAmout();
  }

}
