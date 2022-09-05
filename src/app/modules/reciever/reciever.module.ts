import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecieverRoutingModule } from './reciever-routing.module';
import { RecieverComponent } from './reciever.component';


@NgModule({
  declarations: [
    RecieverComponent
  ],
  imports: [
    CommonModule,
    RecieverRoutingModule
  ]
})
export class RecieverModule { }
