import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import * as util from 'src/app/util/app-util';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store: Store = {
    name: '',
    id: null,
    products: [],
    favicon: '',
    logo:''
  };

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router) { }

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
    util.setPageAttrs(store.name, store.favicon);
  }

}
