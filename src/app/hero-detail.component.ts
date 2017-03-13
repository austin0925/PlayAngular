import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template:`
    <h6>-----------DETAIL-----------</h6>
    <h2>{{title}}</h2>
    <div *ngIf="hero">
      <h3>{{hero.name}} details!</h3>
      <h3><label>id: </label>{{hero.id}}</h3>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
