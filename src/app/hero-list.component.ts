import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/observable';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-list',
    template: `
        <h2>HEROES</h2>
        <ul class="items">
            <li *ngFor="let hero of heroes | async"
            [class.selected]="isSelected(hero)"
            (click)="onSelect(hero)">
            <span class="badge">{{ hero.id }}</span> {{ hero.name }}
            </li>
        </ul>

        <button routerLink="/sidekicks">Go to sidekicks</button>
    `
})

export class HeroListComponent implements OnInit {
    heroes: Observable<Hero[]>;

    private selectedId: number;

    ngOnInit(): void {
        this.heroes = this.route.params.switchMap(
            (params: Params) => {
                this.selectedId = +params['id'];
                return this.service.getHeroes();
            }
        )
    }

    constructor(
        private service: HeroService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    isSelected(hero: Hero){
        return hero.id === this.selectedId;
    }

}