import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { SliderOverviewExample } from './slider.component'

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule,
    RouterModule.forChild([{ path: '', component: SliderOverviewExample }])
  ],
  declarations: [SliderOverviewExample],
})
export class SliderExampleModule {}
