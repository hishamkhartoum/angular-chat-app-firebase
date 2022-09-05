import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransRoutingModule } from './trans-routing.module';
import { TransComponent } from './trans.component';


@NgModule({
  declarations: [
    TransComponent
  ],
  imports: [
    CommonModule,
    TransRoutingModule
  ]
})
export class TransModule { }
