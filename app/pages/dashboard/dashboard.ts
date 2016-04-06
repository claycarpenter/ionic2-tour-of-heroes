import {Page} from 'ionic-angular';
import {Hero} from '../../lib/hero';
import {HEROES} from '../../lib/mock-heroes';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class Dashboard {
  public hero: Hero;
  public heroes: Hero[] = HEROES;

  constructor() {
    this.hero = new Hero(82, 'ClayTron');
  }
}
