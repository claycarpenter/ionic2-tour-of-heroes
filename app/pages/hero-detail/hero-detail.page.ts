import {Page, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
import {Hero} from '../../lib/hero';


@Page({
  templateUrl: 'build/pages/hero-detail/hero-detail.page.html'
})
export class HeroDetailPage implements OnInit {
  public hero: Hero;

  constructor(private _navParams: NavParams) { }

  ngOnInit() {
    // Pull in Hero from Nav params.
    this.hero = this._navParams.get('hero');
  }
}
