import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransComponent } from './trans.component';

const routes: Routes = [{ path: '', component: TransComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransRoutingModule { }
