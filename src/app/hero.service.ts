import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    hero: Hero;
    heroes: Hero[];

    getHero(id: number): Promise<Hero>{
        return this.getHeroes().then(heroes => this.hero = heroes[id])
    }
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    } //stub
}
