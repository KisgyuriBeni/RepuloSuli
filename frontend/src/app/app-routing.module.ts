import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BejelComponent } from './parts/bejel/bejel.component';
import { RegistComponent } from './parts/regist/regist.component';
import { FooldalComponent } from './parts/fooldal/fooldal.component';
import { ElfjelComponent } from './parts/elfjel/elfjel.component';
import { ProfilComponent } from './parts/profil/profil.component';
import { VerifyComponent } from './parts/verify/verify.component';
import { AdatlapComponent } from './parts/adatlap/adatlap.component';
import { JelentkComponent } from './parts/jelentk/jelentk.component';
import { TajekoztatoComponent } from './parts/tajekoztato/tajekoztato.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RepulokComponent } from './admin/repulok/repulok.component';
import { FelhasznalokComponent } from './admin/felhasznalok/felhasznalok.component';
import { KepzesekComponent } from './admin/kepzesek/kepzesek.component';
import { authGuard } from './guards/auth.guard';
import { TokenGuard } from './guards/token.guard';
import { ischeckedGuard } from './guards/ischecked.guard';

const routes: Routes = [
  {path:'verify', component:VerifyComponent},
  {path: 'bejel',component:BejelComponent},
  {path: 'fooldal', component:FooldalComponent},
  {path: 'elfelejtett', component:ElfjelComponent},
  {path: 'regist', component:RegistComponent},
{
  path: 'profil', 
  component:ProfilComponent,
  canActivate: [TokenGuard]
},
{
  path: 'adatlap', 
  component:AdatlapComponent,
  canActivate: [TokenGuard]

},
{
  path: 'jelentkezes', 
  component:JelentkComponent,
  canActivate: [TokenGuard, ischeckedGuard]

},
{
  path: 'tajekoztato', 
  component:TajekoztatoComponent,
  canActivate: [TokenGuard]

},
{
  path: 'admin', 
  component:AdminComponent,
  canActivate: [authGuard]
},
{
  path: 'adminrep', 
  component:RepulokComponent,
  canActivate: [authGuard]
},
{
  path: 'adminfelh', 
  component:FelhasznalokComponent,
  canActivate: [authGuard]
},
{
  path: 'adminkepzsk', 
  component:KepzesekComponent,
  canActivate: [authGuard]
},
{path: ' ', component:FooldalComponent},
{path: '**', component:FooldalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }
