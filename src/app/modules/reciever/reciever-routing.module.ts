import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieverComponent } from './reciever.component';

const routes: Routes = [{ path: '', component: RecieverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieverRoutingModule { }
