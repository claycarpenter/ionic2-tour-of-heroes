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
    // this._heroService.getTopHeroes(5).then(heroes => this.heroes = heroes);
    this._heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(0, 5),
      error => console.error(error)
    );
  }

  public onSelectHero(selectedHero: Hero) {
    this._navCtrl.push(HeroDetailPage, {hero: selectedHero});
  }

  public addHero(name: string) {
    if (!name) { return; }

    this._heroService.addHero(name)
                      .subscribe(
                        hero => this.heroes.push(hero),
                        error => console.log(error)
                      );
  }

  ngOnInit() {
    this.getHeroes();
  }
}
