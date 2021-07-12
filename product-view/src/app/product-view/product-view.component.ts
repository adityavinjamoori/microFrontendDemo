import {  Component, ViewEncapsulation, TemplateRef, ViewChild, ElementRef, OnInit, Input  } from '@angular/core';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductViewComponent implements OnInit {

  public productlist : any[] = [
    {
      productname : 'Basketball sneakers',
      code : 'cat1-0001',
      price : 90.00,
      cartprice : 0,
      available : 10,
      qty : 0
    }, {
      productname : 'ACTIVE Jersey',
      code : 'cat1-0010',
      price : 25.00,
      cartprice : 0,
      available : 9,
      qty : 0
    }, {
      productname : 'Power Supplements',
      code : 'cat1-0008',
      price : 30.00,
      cartprice : 0,
      available : 11,
      qty : 0
    }, {
      productname : 'Mineral Water',
      code : 'cat1-0011',
      price : 4.00,
      cartprice : 0,
      available : 8,
      qty : 0
    }
  ];
  constructor() { }
  ngOnInit(): void {
  }
  
  /*
  public addToCart(product) {
    if(product.qty === product.available) {
      console.log('Product is out of Stock.');
    } else {
      product.qty = product.qty + 1;
      const productcartele = document.querySelector('product-cart');
      if(productcartele != null) {
        //productcartele['message']=product;
      }
    }
   }
  
  
  @Input()
  set message(message: string) {
    let productObj = message;
    for(let product of this.productlist) {
      //if(product.productname === productObj['productname']) {
        //product.qty= productObj['qty'];
        break;
      }
    }
  
  */
  //get message(): string { return this._message; }
  //_message: string;

  

}
