import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap'

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

    ngOnInit(): void {
      this.route.params.switchMap(
        (params: Params) => this.heroService.getHero(+params['id']).then(
          heroes => this.hero = heroes[0]
        )
      );
    }

    gotoHeroes(): void{
      let heroId = this.hero ? this.hero.id : null;
      this.router.navigate(['/heroes', {id: heroId, foo: 'foo'}]);
    }

    goBack(): void{
      this.location.back();
    }

    @Input() hero: Hero;

}
