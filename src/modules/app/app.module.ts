import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { SystemModule } from '../system/system.module';

import { AppComponent } from './app.component/app.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    SystemModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }