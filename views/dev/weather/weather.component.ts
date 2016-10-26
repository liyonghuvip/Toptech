import {Component} from '@angular/core';
import {OnInit} from "@angular/core";

@Component({
    selector: 'weather',
    template: `<span>{{coord}}</span>`,
    providers: []
})

export class weatherComponent implements OnInit {
    constructor() {
    }

    public coord;

    getCurrentLocation() {
        console.log(this.coord)
    }

    ngOnInit() {
        console.log('init')
    }

}
