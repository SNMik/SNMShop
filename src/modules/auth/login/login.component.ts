import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/modules/shared/services/users.service';
import { AuthService } from '../services/auth.service';

import { User } from 'src/modules/shared/models/user.model';
import { Message } from 'src/modules/shared/models/message.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(private userService: UserService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.message = new Message('danger', '');

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const email = this.form.value.email; //"wfm@mail.ru"

    this.userService.getUserByEmail(email)
      .subscribe((users: User[]) => {
        let user = users[0] ? users[0] : undefined;
        if (user) {          
          if (user.password === this.form.value.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
          }
          else {
            this.showMessage('Неверный пароль.');
          }
        }
        else {
          this.showMessage('Не найден пользователь с таким email.');
        }
      });
  }
}
