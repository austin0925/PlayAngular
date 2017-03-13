import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{appName}} (N3)</h1>
    <h2>{{title}}</h2>
    <div>
      <h3>id: {{hero.id}}</h3>
      <h3>{{hero.name}} details!</h3>
    </div>
    <hr/>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <h2> My Heroes</h2>
    <ul>
      <li>
        <!-- each hero goes here -->
      </li>
    </ul>
  `,
})

export class AppComponent  {
  title = 'Tour of Heroes'
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  }
  heroes = HEROES;
  appName = 'Angular|quickstart'; 
}

export class Hero{
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
