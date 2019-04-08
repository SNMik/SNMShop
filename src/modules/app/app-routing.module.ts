import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' } // по умолчанию редиректит на страницу с логином
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // регистрация корневых модулей
  exports: [RouterModule]
})

export class AppRoutingModule { }
