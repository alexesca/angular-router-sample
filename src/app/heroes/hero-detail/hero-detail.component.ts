import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  
    this.hero = this.service.getHero(id);
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that hero.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
