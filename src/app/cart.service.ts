import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   static cartList:any[]=[];
   static total:any={count:0,total:0};
  constructor() {
    
   }
  addToCart(item){
    CartService.cartList.push(item);
  }
  getCartList(){
    return CartService.cartList;
  }
  static getTotalCount(){
    CartService.total.count= CartService.cartList.map(item => item.count).reduce((prev,next) => prev + next);
  }
  static getTotal(){
    let sum = 0;
    CartService.cartList.map(item => {
      sum= sum+ (item.count * item.price)
    });
    CartService.total.total = sum;
  }
}
