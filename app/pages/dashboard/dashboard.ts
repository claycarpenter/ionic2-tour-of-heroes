import {Page} from 'ionic-angular';
import {Hero} from '../../lib/hero';


@Page({
  templateUrl: 'build/pages/dashboard/dashboard.html'
})
export class Dashboard {
  public hero: Hero;

  constructor() {
    this.hero = new Hero(82, 'ClayTron');
  }
}
