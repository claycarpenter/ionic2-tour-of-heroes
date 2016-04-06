import {Page} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Hero} from '../../lib/hero';
import {HeroService} from '../../lib/hero.service';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard.page.html'
})
export class DashboardPage implements OnInit {
  public heroes: Hero[];

  constructor(private _heroService: HeroService) { }

  getHeroes() {
    this._heroService.getTopHeroes(5).then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
