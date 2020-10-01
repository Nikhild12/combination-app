import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { App2SharedModule } from 'projects/app2/src/app/app.module';


const routes: Routes = [
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
