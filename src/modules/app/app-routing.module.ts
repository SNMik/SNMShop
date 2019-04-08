import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' } // по умолчанию редиректит на эту страницу
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // регистрация корневых модулей
  exports: [RouterModule]
})

export class AppRoutingModule { }
