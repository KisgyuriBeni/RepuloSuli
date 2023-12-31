import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BejelComponent } from './parts/bejel/bejel.component';
import { RegistComponent } from './parts/regist/regist.component';
import { NavComponent } from './parts/nav/nav.component';
import { FooldalComponent } from './parts/fooldal/fooldal.component';
import { ProfilComponent } from './parts/profil/profil.component';
import { ElfjelComponent } from './parts/elfjel/elfjel.component';
import { VerifyComponent } from './parts/verify/verify.component';
import { GaleriaComponent } from './parts/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    BejelComponent,
    RegistComponent,
    NavComponent,
    FooldalComponent,
    ProfilComponent,
    ElfjelComponent,
    VerifyComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
