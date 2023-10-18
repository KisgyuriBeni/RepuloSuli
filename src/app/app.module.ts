import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BejelComponent } from './parts/bejel/bejel.component';
import { RegistComponent } from './parts/regist/regist.component';
import { NavComponent } from './parts/nav/nav.component';
import { FooldalComponent } from './parts/fooldal/fooldal.component';

@NgModule({
  declarations: [
    AppComponent,
    BejelComponent,
    RegistComponent,
    NavComponent,
    FooldalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
