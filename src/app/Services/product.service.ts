import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';



@Injectable({
  providedIn: 'root'
})

export class ProductService implements OnInit{
  private _url: string = 'https://productslistpagination-default-rtdb.firebaseio.com/products.json';
 // private _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  //products: Product[] = [];
  
  constructor(private httpClient: HttpClient) {
   
  }
 
  getProducts(){
    return this.httpClient.get<Product[]>('https://productslistpagination-default-rtdb.firebaseio.com/products.json')
   //.subscribe(item => {
      //console.log(item);
     // this.products = item;
      //console.log(this.products);
  //  });
    

  }
  //testProducts(){
  //  setTimeout(() => {
   //   console.log(this.products);
   // },5000);
    

 // }
  
  ngOnInit(): void {
    //this.getProducts();
   
  
    
    };
    /*
  }

  getProducts(): Observable<Product[]> {
    if (this._products.getValue().length === 0) {
      // only make the HTTP request if the products list is empty
      this.httpClient.get<Product[]>(this._url).pipe(
        map((data: Product[]) => data.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          color: item.color,
          available: item.available,
          image: item.image,
        })))
      ).subscribe((products: Product[]) => {
        this._products.next(products);
      });
    }
    return this._products.asObservable();
  }
  */
  
  /*ngOnInit(): void {
    this.getProducts().subscribe((data) => {
      this.products = data;
     
    });
  }
 
  arrayLength: number = this.products.length;
  private p = new BehaviorSubject<number>(1);
  private startIndex = new BehaviorSubject<number>(0);
  
  //startIndex: number =0;
  private endIndex = new BehaviorSubject<number>(2);
 // endIndex: number =2;
 getStartIndex(){
  return this.startIndex.asObservable();
 }
 getEndIndex(){
  return this.endIndex.asObservable();
 }
 getp(){
    return this.p.asObservable();
   }
 updateStartIndex(newValue: number) {
  this.startIndex.next(newValue);
}// use this method in the button click
updateEndIndex(newValue: number) {
  this.endIndex.next(newValue);
}

updateP(newValue: number) {
    this.p.next(newValue);
  }



export class ProductService {
  
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpeg'},
    {id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpeg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/products/product-image-4.jpeg'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.jpeg'},
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpeg'}
  ];
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/products/product-image-1.jpeg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/products/product-image-2.jpeg'},
    {id:3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-3.jpeg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/products/product-image-4.jpeg'},
    {id:5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: '/assets/products/product-image-5.jpeg'},
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/products/product-image-6.jpeg'},
    {id:7, name: 'Samsung Galaxy S21 Ultra', price: '1249', color: 'Phantom Black', available: 'Available', image: '/assets/products/product-image-7.jpeg'},
    {id:8, name: 'BOSE QuietComfort 35 II', price: '349', color: 'Silver', available: 'Available', image: '/assets/products/product-image-8.jpeg'},
    {id:9, name: 'NIKE Air Max 270', price: '150', color: 'Black', available: 'Available', image: '/assets/products/product-image-9.jpeg'},
    {id:10, name: 'Canon EOS M50 Mark II', price: '999', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-10.jpeg'},
    {id:11, name: 'LEGO Star Wars The Mandalorian', price: '199', color: 'Multi-Color', available: 'Available', image: '/assets/products/product-image-11.jpeg'},
    {id:12, name: 'Xbox Series X', price: '499', color: 'Black', available: 'Not Available', image: '/assets/products/product-image-12.jpeg'},
    {id:13, name: 'Fitbit Charge 5', price: '179', color: 'Black', available: 'Available', image: '/assets/products/product-image-13.jpeg'},
    {id:14, name: 'Sennheiser CX 400BT', price: '99', color: 'White', available: 'Available', image: '/assets/products/product-image-14.jpeg'},
    {id:15, name: 'Sony PlayStation 5', price: '499', color: 'White', available: 'Not Available', image: '/assets/products/product-image-15.jpeg'},
    {id:16, name: 'LG 34-Inch UltraWide Monitor', price: '1199', color: 'Black', available: 'Available', image: '/assets/products/product-image-16.jpeg'},
    {id:17, name: 'DJI Mavic 2 Pro', price: '1599', color: 'Gray', available: 'Available', image: '/assets/products/product-image-17.jpeg'},
  ];
  
  arrayLength: number = this.products.length;

  private p = new BehaviorSubject<number>(1);
  private startIndex = new BehaviorSubject<number>(0);
  
  //startIndex: number =0;
  private endIndex = new BehaviorSubject<number>(2);
 // endIndex: number =2;
 getStartIndex(){
  return this.startIndex.asObservable();
 }
 getEndIndex(){
  return this.endIndex.asObservable();
 }

 getp(){
    return this.p.asObservable();
   }
 updateStartIndex(newValue: number) {
  this.startIndex.next(newValue);
}// use this method in the button click
updateEndIndex(newValue: number) {
  this.endIndex.next(newValue);
}
updateP(newValue: number) {
    this.p.next(newValue);
  }
constructor() { }
}
*/
}