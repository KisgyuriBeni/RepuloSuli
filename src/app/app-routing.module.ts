import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BejelComponent } from './parts/bejel/bejel.component';
import { RegistComponent } from './parts/regist/regist.component';
import { FooldalComponent } from './parts/fooldal/fooldal.component';

const routes: Routes = [
  {path: 'bejel', component:BejelComponent},
  {path: 'regist', component:RegistComponent},
  {path: 'fooldal', component:FooldalComponent},
  {path: ' ', component:FooldalComponent},
  {path: '**', component:FooldalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

 }
