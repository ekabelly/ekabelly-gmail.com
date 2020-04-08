import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {
  
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
