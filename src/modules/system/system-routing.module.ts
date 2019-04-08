import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CompanyPageComponent } from './company-page/company-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { SystemWrapperComponent } from './system-wrapper/system-wrapper.component';

const routes: Routes = [
    {
        path: '', component: SystemWrapperComponent, children: [
            { path: 'company', component: CompanyPageComponent },
            { path: 'products', component: ProductsPageComponent },
            { path: 'contact', component: ContactsPageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], // регистрация дочерних модулей
    exports: [RouterModule]
})

export class SystemRoutingModule { }