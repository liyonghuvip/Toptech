import {Component, OnInit} from '@angular/core';
import {BackgroundService} from "./background.service";

@Component({
    selector: 'background',
    template: `
            <canvas id="canvas">Your Browser does NOT support canvas!~<br>Download the latest chrome below:<br><a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a></canvas>
    `,
    providers: [BackgroundService]
})
export class BackgroundComponent implements OnInit {
    constructor(private _backgroundService: BackgroundService) {
    }

    private _canvas: any;
    private _ctx: any;
    private _imgPath: any;

    initialization() {
        this._canvas = document.getElementById('canvas');
        this._ctx = this._canvas.getContext('2d');
        this.resize();
        this.getBackgroundImg();

    };

    getBackgroundImg() {

        this._backgroundService.getImageUrl();
        // .subscribe(
        //     data => {
        //         this._imgPath = data.imgPath;
        //
        //         let img = new Image();
        //         img.src = `src/img/${this._imgPath}`;
        //
        //
        //         img.onload = () => {
        //             console.log('load img done')
        //             this._ctx.drawImage(img, 0, 0, this._canvas.width, this._canvas.height);
        //         }
        //     },
        //     err => {
        //         console.log(err)
        //     }
        // )

    }


    resize() {
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }


    ngOnInit() {
        this.initialization();
    }
}
