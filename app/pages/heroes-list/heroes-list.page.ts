import {Page} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Hero} from '../../lib/hero';
import {HeroService} from '../../lib/hero.service';


@Page({
  templateUrl: 'build/pages/heroes-list/heroes-list.page.html'
})
export class HeroesListPage implements OnInit {
  public heroes: Hero[];

  constructor(private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
