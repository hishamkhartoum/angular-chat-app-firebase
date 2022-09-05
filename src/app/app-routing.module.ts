import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, { path: 'trans', loadChildren: () => import('./modules/trans/trans.module').then(m => m.TransModule) }, { path: 'reciever', loadChildren: () => import('./modules/reciever/reciever.module').then(m => m.RecieverModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
