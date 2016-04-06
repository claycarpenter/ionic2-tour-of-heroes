import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {
  constructor(private _http: Http) { }

  private _heroesUrl = '/heroes.json';

  getHeroes() {
    // return Promise.resolve(HEROES);

    return this._http.get(this._heroesUrl)
                .map(res => <Hero[]> res.json().data)
                .do(data => console.log(data))
                .catch(this.handleError);
  }

  getTopHeroes(count: number) {
    // let allHeroesQ = this.getHeroes();
    //
    // return allHeroesQ.then(heroes => heroes.slice(0, count));

    this.getHeroes().subscribe(
      heroes => heroes.slice(0, count),
      error => error
    );
  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }
}
