import { Injectable } from "@angular/core"
import { NotificationSevice } from "app/shared/messages/notification.service"
import { MenuItem } from "../menu-item/menu-item.model"
import { CartItem } from "./cart-item.model"

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = []

  constructor(private notificationService: NotificationSevice) { }

  clear() {
    this.items = []
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1
    } else {
      this.items.push(new CartItem(item))
    }
    this.notificationService.notify(`Você adicionou o item ${ item.name }`)
  }

  //add qty itens do carrinho
  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1
  }

  //diminue qty itens do carrinho
  decreaseQty(item: CartItem) {
    item.quantity = item.quantity - 1
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${ item.menuItem.name }`);
  }

  //mudo o array de items para um array de valores e somo o valor anterior com o novo gerando o total
  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
