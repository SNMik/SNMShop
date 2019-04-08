import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CompanyPageComponent,
    ProductsPageComponent,
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class SystemModule { }
