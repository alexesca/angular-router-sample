import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(_id) {
    for (let i = 0; i < HEROES.length; i++) {
      const hero = HEROES[i];
      console.log(+hero.id, +_id, +hero.id === +_id)
      if(+hero.id === +_id) return hero;
    }
  }
}
