import {Component} from 'angular2/core';
import {backgroundService} from "./background.service";
import {OnInit} from "angular2/src/core/linker/interfaces";

@Component({
  selector: 'background',
  template: `
        <canvas>Your Browser does NOT support canvas!~<br>Download the latest chrome below:<br><a href="https://www.google.com/chrome/">https://www.google.com/chrome/</a></canvas>
        <div *ngFor="#el of imgPaths;#i = index">{{el.imgPath}} {{ i }}</div>
    `,
  providers: [backgroundService]
})
export class BackgroundComponent implements OnInit {
  constructor(private _backgroundService: backgroundService) {
    console.log(`BackgroundComponent init`);
  }

  public imgPaths;

  getBackgroundImg() {
    this._backgroundService.getBackground()
      .then((imgPaths) => this.imgPaths = imgPaths);
  }

  ngOnInit(): any {
    this.getBackgroundImg();
  }

}
