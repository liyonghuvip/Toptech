import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AppRoutes} from "./app.routing";

import {AppComponent}  from './app.component';
import {BackgroundComponent} from "./background/background.component";
import {LoginComponent} from "./user/login.component";




@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        //todo: ##Should not use hash to provide routes. Will find out how to fix it in next fill updates.
        RouterModule.forRoot(AppRoutes, {useHash: true}),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        BackgroundComponent,
        LoginComponent
    ],
    providers: [
        FormBuilder
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
