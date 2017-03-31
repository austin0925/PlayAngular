import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { CrisislistComponent } from './crisis-list.component';
import { NotFoundComponent } from './not-found.component';
import { NttcheckComponent } from './nttcheck.component';
import { EracheckComponent } from './eracheck.component';
import { Erareporta4Component } from './era-report-a4.component';

const appRoutes: Routes = [
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'crisislist', component: CrisislistComponent},
    {path: 'nttcheck', component: NttcheckComponent},
    {path: 'eracheck', component: EracheckComponent},
    {path: 'erareporta4', component: Erareporta4Component},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports:[
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]  
})

export class AppRoutingModule{}