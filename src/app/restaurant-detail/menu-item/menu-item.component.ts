import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  //o componente parent vai informar a propriedade, para isso precisa do marca-la como @Input()
  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }


  ngOnInit() {
  }


  emitAddEvent() {
    this.add.emit(this.menuItem)
  }
}
