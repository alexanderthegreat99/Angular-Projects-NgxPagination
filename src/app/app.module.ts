import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
