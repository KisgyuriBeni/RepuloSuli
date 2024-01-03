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

const routes: Routes = [
  {path: 'bejel', component:BejelComponent},
  {path: 'verify', component:VerifyComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'elfelejtett', component:ElfjelComponent},
  {path: 'regist', component:RegistComponent},
  {path: 'profil', component:ProfilComponent},
  {path: 'fooldal', component:FooldalComponent},
  {path: 'adatlap', component:AdatlapComponent},
  {path: ' ', component:FooldalComponent},
  {path: '**', component:FooldalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }
