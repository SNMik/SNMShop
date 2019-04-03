import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';

import { UserService } from '../shared/services/users.service';

import { AppComponent } from './app.component/app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }