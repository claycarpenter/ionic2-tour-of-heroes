import {Page, NavController} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Hero} from '../../lib/hero';
import {HeroService} from '../../lib/hero.service';
import {HeroDetailPage} from '../hero-detail/hero-detail.page';


@Page({
  templateUrl: 'build/pages/heroes-list/heroes-list.page.html'
})
export class HeroesListPage implements OnInit {
  public heroes: Hero[];

  constructor(private _heroService: HeroService, private _navCtrl: NavController) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  public onHeroSelected(selectedHero: Hero) {
    console.log(`Selected hero: ${selectedHero.name}`);

    this._navCtrl.push(HeroDetailPage, {hero: selectedHero});
  }

  ngOnInit() {
    this.getHeroes();
  }
}
