import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  p:number = 1;
  itemsPerPage: number = 8;
  totalProduct:any;
  products: any[] = [];
  arrayLength: number = 0;
  startIndex: number =0;
  endIndex: number =2;
  subscriptionStartIndex: Subscription = Subscription.EMPTY;
  subscriptionEndIndex: Subscription = Subscription.EMPTY;
  subscriptionp: Subscription = Subscription.EMPTY;
  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.productService.getProducts();
   // this.productService.testProducts();
   this.productService.getProducts().subscribe(item => {
    console.log(item);
   this.products = item;
    console.log(this.products);
    });
     //this.testProducts();
    console.log("products:", this.products);
   
  }
  onPageChange(pageNumber: number) {
    this.p = pageNumber;
    //this.productService.updateP(this.p);
  }
}
    
  
 /*
    this.arrayLength = this.productService.arrayLength;
    this.totalProduct = this.productService.arrayLength;
    this.subscriptionp = this.productService.getp().subscribe(value => {
      this.p = value;
    });
    console.log( "array length: " + this.arrayLength);
    this.subscriptionStartIndex = this.productService.getStartIndex().subscribe(value => {
      this.startIndex = value;
    });
   
    console.log( "startIndex: " + this.startIndex);
    this.subscriptionEndIndex = this.productService.getEndIndex().subscribe(value => {
      this.endIndex = value;
    });
    
    console.log( "endIndex: " + this.endIndex);


   
  }
 
  ngOnDestroy() {
    this.subscriptionStartIndex.unsubscribe();
   this.subscriptionEndIndex.unsubscribe();
  }
   */  
