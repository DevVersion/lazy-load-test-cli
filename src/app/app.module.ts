import '../polyfills';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Uncomment the import declaration below to observe proper, working
 * slider animation on drag inside a lazy module:
 * ⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱
 */
// import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /**
     * Yep, this one too:
     * ⟱⟱⟱⟱⟱⟱⟱⟱⟱⟱
     */
    // MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'example',
        loadChildren: './app/lazy/slider.module#SliderExampleModule'

      }
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */