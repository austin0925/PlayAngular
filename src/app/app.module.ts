import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { CrisislistComponent } from './crisis-list.component';
import { NotFoundComponent } from './not-found.component';
import { HeroSearchComponent } from './hero-search.component';
import { NttcheckComponent } from './nttcheck.component';
import { EracheckComponent } from './eracheck.component';
import { Erareporta4Component } from './era-report-a4.component';

import { HeroService} from './hero.service';

/*import { SignaturePadModule } from 'angular2-signaturepad/signature-pad';*/


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent , HeroDetailComponent, HeroesComponent, DashboardComponent, HeroListComponent, CrisislistComponent, NotFoundComponent, HeroSearchComponent, NttcheckComponent, EracheckComponent, Erareporta4Component ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

