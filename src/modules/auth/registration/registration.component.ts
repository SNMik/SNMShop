import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/modules/shared/services/users.service';
import { User } from 'src/modules/shared/models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])
    });

  }

  onSubmit() {
    const { email, password, name } = this.form.value;
    const user = new User(email, password, name);

    this.userService.createNewUser(user)
      .subscribe((user: User) => console.log(user));
  }
}
