import {Component} from '@angular/core';
import {BackgroundComponent} from "./background/backgrouond.component";
import {weatherComponent} from "./weather/weather.component";

@Component({
  selector: 'Top-tech',
    template: `
        <background></background>
        <router-outlet></router-outlet>
        <polifills></polifills>
        <control-panel>
            <weather></weather>
        </control-panel>
        <notifications></notifications>
    `,
    directives: [BackgroundComponent, weatherComponent],
    providers: [BackgroundComponent, weatherComponent]
})
export class AppComponent {

    constructor() {

    }
}
