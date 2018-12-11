import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[
    CartService
  ]
})
export class ProductComponent implements OnInit {
  @Input() product:any;
  constructor(cartservice:CartService) {
  
  }
  ngOnInit() {
  
  }

  addToCart(item){
    item.count=1;
    CartService.cartList.push(item)
    item.added=true;
    CartService.getTotalCount();
    CartService.getTotal();
  }
  removeFromCart(item){
    item.added= false;
    const index: number = CartService.cartList.indexOf(item);
    if (index !== -1) {
      CartService.cartList.splice(index, 1);
    }
    CartService.getTotalCount();
    CartService.getTotal();     
  }

}
