import { EventEmitter } from "@angular/core";

export class NotificationSevice {
  notifier = new EventEmitter<any>()

  notify(message: string) {
    this.notifier.emit(message);
  }
}
