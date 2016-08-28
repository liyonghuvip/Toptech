import {Component} from 'angular2/core';
import {BackgroundComponent} from "./background/backgrouond.component";

@Component({
  selector: 'Top-tech',
    template: `
        <background></background>
        <router-outlet></router-outlet>
        <control-layer></control-layer>
        <notifications></notifications>
    `,
  directives: [BackgroundComponent],
  providers: [BackgroundComponent]
})
export class AppComponent {
  constructor() {
  }
}
