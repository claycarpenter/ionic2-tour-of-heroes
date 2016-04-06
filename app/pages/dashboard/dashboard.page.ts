import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Hero} from '../../lib/hero';
import {HeroService} from '../../lib/hero.service';
import {HeroDetailPage} from '../hero-detail/hero-detail.page';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard.page.html'
})
export class DashboardPage implements OnInit {
  public heroes: Hero[];

  constructor(private _heroService: HeroService, private _navCtrl: NavController) { }

  getHeroes() {
    this._heroService.getTopHeroes(5).then(heroes => this.heroes = heroes);
  }

  public onSelectHero(selectedHero: Hero) {
    this._navCtrl.push(HeroDetailPage, {hero: selectedHero});
  }

  ngOnInit() {
    this.getHeroes();
  }
}
