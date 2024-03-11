import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BejelComponent } from './parts/bejel/bejel.component';
import { RegistComponent } from './parts/regist/regist.component';
import { FooldalComponent } from './parts/fooldal/fooldal.component';
import { ElfjelComponent } from './parts/elfjel/elfjel.component';
import { ProfilComponent } from './parts/profil/profil.component';
import { VerifyComponent } from './parts/verify/verify.component';
import { GaleriaComponent } from './parts/galeria/galeria.component';
import { AdatlapComponent } from './parts/adatlap/adatlap.component';
import { JelentkComponent } from './parts/jelentk/jelentk.component';
import { TajekoztatoComponent } from './parts/tajekoztato/tajekoztato.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RepulokComponent } from './admin/repulok/repulok.component';
import { FelhasznalokComponent } from './admin/felhasznalok/felhasznalok.component';
import { KepzesekComponent } from './admin/kepzesek/kepzesek.component';

const routes: Routes = [
  {path: 'bejel', component:BejelComponent},
  {path: 'verify', component:VerifyComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'elfelejtett', component:ElfjelComponent},
  {path: 'regist', component:RegistComponent},
  {path: 'profil', component:ProfilComponent},
  {path: 'fooldal', component:FooldalComponent},
  {path: 'adatlap', component:AdatlapComponent},
  {path: 'jelentkezes', component:JelentkComponent},
  {path: 'tajekoztato', component:TajekoztatoComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'adminrep', component:RepulokComponent},
  {path: 'adminfelh', component:FelhasznalokComponent},
  {path: 'adminkepzsk', component:KepzesekComponent},
  {path: ' ', component:FooldalComponent},
  {path: '**', component:FooldalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }
