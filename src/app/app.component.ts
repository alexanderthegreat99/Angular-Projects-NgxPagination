import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaginationApp';
  p:number = 1;
  //subscriptionp: Subscription = Subscription.EMPTY;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    //this.subscriptionp = this.productService.getp().subscribe(value => {
     // this.p = value;
     // console.log(this.productService.getProducts());
      
   // });
  }
  /*onPageChange(pageNumber: number) {
    this.p = pageNumber;
    this.productService.updateP(this.p);
  }
  */
}
