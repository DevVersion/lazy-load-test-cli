import {Component} from '@angular/core';

/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  template: `
    <mat-slider></mat-slider>
    <mat-slide-toggle>Slide Toggle</mat-slide-toggle>
  `,
  styles: [`mat-slider {
    width: 300px;
  }`],
})
export class SliderOverviewExample {}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */