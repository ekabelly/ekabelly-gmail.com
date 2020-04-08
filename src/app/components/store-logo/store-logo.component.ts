import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-store-logo',
  templateUrl: './store-logo.component.html',
  styleUrls: ['./store-logo.component.css']
})
export class StoreLogoComponent implements OnInit {

  @Input() logo: string;
  style: string = 'background-image:url();';

  constructor() { }

  ngOnInit(): void {
    this.style = `background-image: url(${this.logo});`;
  }

}
