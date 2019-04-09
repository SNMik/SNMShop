import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/modules/shared/services/users.service';
import { User } from 'src/modules/shared/models/user.model';

@Component({
  selector: 'app-system-login',
  templateUrl: './system-login.component.html',
  styleUrls: ['./system-login.component.css']
})
export class SystemLoginComponent implements OnInit {

  user: User;
  authentificate: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.user ? this.authentificate = true : this.authentificate = false;
  }

}
