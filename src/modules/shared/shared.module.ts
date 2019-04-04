import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ]
})

export class SharedModule {}