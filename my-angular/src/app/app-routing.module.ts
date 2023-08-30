import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicsComponent} from "./basics/basics.component";
import {ComponentDetailComponent} from "./component-detail/component-detail.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const routes: Routes = [
  {path: '', component: BasicsComponent},
  {path: 'component-detail', component: ComponentDetailComponent},
  {path: 'rxjs', component: RxjsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
