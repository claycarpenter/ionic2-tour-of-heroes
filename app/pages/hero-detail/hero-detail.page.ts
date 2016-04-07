import {Page, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Hero} from '../../lib/hero';
import {HeroService} from '../../lib/hero.service';


@Page({
  templateUrl: 'build/pages/hero-detail/hero-detail.page.html'
})
export class HeroDetailPage implements OnInit {
  public hero: Hero = new Hero(0, '');

  constructor(private _heroService: HeroService, private _navParams: NavParams) { }

  getHero(id: number) {
    this._heroService.getHero(id).subscribe(
      hero => this.hero = hero,
      error => console.error(error)
    );
  }

  ngOnInit() {
    // Pull in Hero from Nav params.
    let heroId = this._navParams.get('id');

    this.getHero(heroId);
  }
}
