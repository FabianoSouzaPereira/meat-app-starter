import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { User } from './user.model';
import { NotificationSevice } from '../../shared/messages/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  response: HttpErrorResponse

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationSevice
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [ Validators.required, Validators.email ]),
      password: this.fb.control('', Validators.required)
    })
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => this.notificationService.notify(`Bem Vindo, ${ user.name }`),
        //HttpErrorResponse
        response => this.notificationService.notify(response.error.message))
  }

}
