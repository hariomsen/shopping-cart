import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string;
  constructor(private modalService: NgbModal) {
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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
