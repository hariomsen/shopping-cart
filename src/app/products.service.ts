import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any[];
  constructor() {
      this.products=[
        {name:'product 1',img:"https://via.placeholder.com/150x150.png?text=product1",price:200},
        {name:'product 2',img:"https://via.placeholder.com/150x150.png?text=product2",price:120},
        {name:'product 3',img:"https://via.placeholder.com/150x150.png?text=product3",price:300},
        {name:'product 4',img:"https://via.placeholder.com/150x150.png?text=product4",price:200},
        {name:'product 5',img:"https://via.placeholder.com/150x150.png?text=product5",price:200},
        {name:'product 6',img:"https://via.placeholder.com/150x150.png?text=product6",price:150},
        {name:'product 7',img:"https://via.placeholder.com/150x150.png?text=product7",price:100},
        {name:'product 8',img:"https://via.placeholder.com/150x150.png?text=product8",price:200},
        {name:'product 9',img:"https://via.placeholder.com/150x150.png?text=product9",price:200},
        {name:'product 10',img:"https://via.placeholder.com/150x150.png?text=product10",price:50},
        {name:'product 12',img:"https://via.placeholder.com/150x150.png?text=product11",price:80},
        {name:'product 13',img:"https://via.placeholder.com/150x150.png?text=product12",price:34}
      ]
   } 
   getProducts(){
     return this.products;
   }
}
