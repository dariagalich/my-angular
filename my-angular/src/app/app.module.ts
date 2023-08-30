import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseTypescriptComponent } from './base-typescript/base-typescript.component';
import {HeaderComponent} from "./components/header/header.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicsComponent } from './basics/basics.component';
import {FormsModule} from "@angular/forms";
import { ComponentDetailComponent } from './component-detail/component-detail.component';
import {PostFormComponent} from "./components/post-form/post-form.component";
import {PostComponent} from "./components/post/post.component";
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseTypescriptComponent,
    HeaderComponent,
    BasicsComponent,
    ComponentDetailComponent,
    PostFormComponent,
    PostComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
