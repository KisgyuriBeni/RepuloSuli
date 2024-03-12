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
import { AdatlapComponent } from './parts/adatlap/adatlap.component';
import { JelentkComponent } from './parts/jelentk/jelentk.component';
import { TajekoztatoComponent } from './parts/tajekoztato/tajekoztato.component';
import { FooterComponent } from './parts/footer/footer.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RepulokComponent } from './admin/repulok/repulok.component';
import { FelhasznalokComponent } from './admin/felhasznalok/felhasznalok.component';
import { KepzesekComponent } from './admin/kepzesek/kepzesek.component';


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
    GaleriaComponent,
    AdatlapComponent,
    JelentkComponent,
    TajekoztatoComponent,
    FooterComponent,
    AdminComponent,
    RepulokComponent,
    FelhasznalokComponent,
    KepzesekComponent
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
