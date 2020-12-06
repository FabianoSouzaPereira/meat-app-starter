import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translatey(-20px)' }),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

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
