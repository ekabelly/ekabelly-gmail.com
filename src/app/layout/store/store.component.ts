import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import * as util from 'src/app/util/app-util';
import { i18n } from '../../mixins';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent extends i18n implements OnInit {

  store: Store = {
    name: '',
    id: null,
    categories: {},
    favicon: '',
    logo:''
  };

  filteredProducts: Product[] = []

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit(): void {
    const { storeId } = this.route.snapshot.params;
    if(storeId){
      this.storeService.getStore(storeId).subscribe(data => this.setComponentData(data));      
    } else {
      this.router.navigateByUrl('/');
    }
  }
  
  setComponentData(store: Store){
    this.store = store;
    this.filteredProducts = this.getStoreMainProducts();
    util.setPageAttrs(store.name, store.favicon);
  }

  getStoreProductsAmount(): number{
    return this.filteredProducts.length
  }

  getStoreMainProducts(): Product[]{
    const categories = [...Object.values(this.store.categories)];
    return categories.flat();
  }

  getProductsByCategory(category: string): Product[]| []{
    return this.store.categories[category] || []
  }

  onSortSelected(sortBy: string){
    const products = this.getStoreMainProducts();
    this.filteredProducts = util.sortProductsArr(products, sortBy);
  }

}
