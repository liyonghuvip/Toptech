import {Component} from '@angular/core';
// import {backgroundService} from "./background.service";

@Component({
    selector: 'background',
    template: `
        <div class="background">
            <canvas>Your Browser does NOT support canvas!~<br>Download the latest chrome below:<br><a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a></canvas>
        </div>
    `,
    providers: []
})
export class BackgroundComponent {
    constructor() {
        console.log(`BackgroundComponent init`);
    }

    public imgPaths;

    getBackgroundImg() {

    }
}
