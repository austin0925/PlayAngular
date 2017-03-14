import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap'
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl:`./hero-detail.component.html`
})

export class HeroDetailComponent implements OnInit {
    constructor(
      private heroService: HeroService,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location
    ){}

    @Input() hero: Hero;

    heroes: Observable<Hero[]>;
    private selectedId: number;

    ngOnInit(): void {
      this.heroes = this.route.params.switchMap(
        (params: Params) => {
          this.selectedId = +params['id'];
          return this.heroService.getHeroes();
        }
      );
    }

    gotoHeroes(): void{
      let heroId = this.hero ? this.hero.id : null;
      this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
    }

    goBack(): void{
      this.location.back();
    }

}
