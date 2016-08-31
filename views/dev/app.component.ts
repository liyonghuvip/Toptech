import {Component} from '@angular/core';
import {BackgroundComponent} from "./background/background.component";
import {weatherComponent} from "./weather/weather.component";
import {BackgroundService} from "./background/background.service";

@Component({
  selector: 'Top-tech',
    template: `
        <background class="background"></background>
        <polyfills class="polyfills"></polyfills>
        <container class="container">
            <router-outlet></router-outlet>
            <control-panel class="control-panel">
                <weather></weather>
            </control-panel>
        </container>
            
        <notifications class="notifications"></notifications>
    `,
    directives: [BackgroundComponent, weatherComponent],
    providers: [BackgroundComponent, weatherComponent, BackgroundService]
})
export class AppComponent {

    constructor() {

    }
}
