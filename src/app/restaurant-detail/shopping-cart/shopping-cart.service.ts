import { MenuItem } from "../menu-item/menu-item.model"
import { CartItem } from "./cart-item.model"

export class ShoppingCartService {
  items: CartItem[] = []

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
    this.items.splice(this.items.indexOf(item), 1)
  }

  //mudo o array de items para um array de valores e somo o valor anterior com o novo gerando o total
  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}