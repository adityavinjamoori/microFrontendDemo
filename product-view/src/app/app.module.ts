import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [    
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductViewComponent]
})
export class ProductViewModule {
  constructor(private injector: Injector) {
    const productView = createCustomElement(ProductViewComponent, { injector });
    customElements.define('product-view', productView);
  }

  ngDoBootstrap() {}
}
