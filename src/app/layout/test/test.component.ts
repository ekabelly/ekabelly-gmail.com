import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(itemValue: string){
    this.selected = itemValue;
  }

}
