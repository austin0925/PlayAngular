import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    heroes: Hero[];
    test(): void{
        this.heroes = this.heroService.getHeroes();
    }

    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    } //stub
}
