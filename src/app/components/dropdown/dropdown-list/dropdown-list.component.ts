import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  @Input() items: [];
  @Input() isOpen: Boolean;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onItemClick(itemValue: string){
    this.selected.emit(itemValue);
  }

}
