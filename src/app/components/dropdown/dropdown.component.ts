import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() dropdownLabel: string;
  @Input() items: {
    value: string,
    label: string
  }[] = []
  @Output() selected = new EventEmitter<string>();
  selectedValue: string = null;
  
  isOpen: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getIsOpenCssClass(): string{
    return this.isOpen ? 'is-open' : '';
  }

  onSelected(itemValue: string){
    this.selectedValue = this.items.find(item => item.value === itemValue).label;
    this.selected.emit(itemValue);
    this.isOpen = false;
  }

  clickOutside(){
    this.isOpen = false;
  }

}
