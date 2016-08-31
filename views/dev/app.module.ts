import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {routing, appRoutingProviders} from "./app.routing";

import {AppComponent}  from './app.component';
import {BackgroundComponent} from "./background/background.component";
import {LoginComponent} from "./user/login.component";




@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        BackgroundComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
