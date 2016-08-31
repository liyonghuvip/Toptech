import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./user/login.component";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";


const appRoutes: Routes = [
    // { path: "", component: AppComponent},
    {path: "", component: LoginComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);