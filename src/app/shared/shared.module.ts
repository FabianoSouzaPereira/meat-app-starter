import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RadioComponent } from './radio/radio.component';
import { InputComponent } from "./input/input.component";
import { RatingComponent } from "./rating/rating.component";

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationSevice } from './messages/notification.service';
import { LoginService } from "app/security/login/login.service";
import { LoggedInGuard } from "app/security/loggedin.guard";
import { LeaveOrderGuard } from "app/order/leave-order.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "app/security/auth.interceptors";

@NgModule({
  declarations: [ InputComponent, RadioComponent, RatingComponent, SnackbarComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ]
})


export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService,
        RestaurantsService,
        OrderService,
        NotificationSevice,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    }
  }
}
