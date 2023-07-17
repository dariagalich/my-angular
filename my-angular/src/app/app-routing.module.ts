import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicsComponent} from "./basics/basics.component";
import {ComponentDetalesComponent} from "./component-detales/component-detales.component";

const routes: Routes = [
  {path: '', component: BasicsComponent},
  {path: 'component-more', component: ComponentDetalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
