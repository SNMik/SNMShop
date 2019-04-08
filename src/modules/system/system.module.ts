import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { SystemWrapperComponent } from './system-wrapper/system-wrapper.component';
import { SystemLoginComponent } from './system-login/system-login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CompanyPageComponent,
    ProductsPageComponent,
    ContactsPageComponent,
    SystemWrapperComponent,
    SystemLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ]
})

export class SystemModule { }
