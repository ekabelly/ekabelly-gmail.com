import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { StoreComponent } from './layout/store/store.component';
import { StoreService } from './services/store.service';
import { NavComponent } from './components/nav/nav.component';
import { StoreLogoComponent } from './components/store-logo/store-logo.component';
import { ProductItemListComponent } from './components/product-item-list/product-item-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownListComponent } from './components/dropdown/dropdown-list/dropdown-list.component';
import { TestComponent } from './layout/test/test.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    NavComponent,
    StoreLogoComponent,
    ProductItemListComponent,
    ProductsListComponent,
    ErrorPageComponent,
    DropdownComponent,
    DropdownListComponent,
    TestComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
