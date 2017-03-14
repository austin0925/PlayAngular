import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroListComponent } from './hero-list.component';
import { CrisislistComponent } from './crisis-list.component';
import { NotFoundComponent } from './not-found.component';

import { HeroService} from './hero.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent , HeroDetailComponent, HeroesComponent, DashboardComponent, HeroListComponent, CrisislistComponent, NotFoundComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
