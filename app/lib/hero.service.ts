import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {
  constructor(private _http: Http) { }

  private _heroesUrl = 'http://localhost:3000/heroes/';

  getHeroes() {
    // return Promise.resolve(HEROES);

    return this._http.get(this._heroesUrl)
                .map(res => <Hero[]> res.json())
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

  addHero(name: string) : Observable<Hero> {
    let body = JSON.stringify({name});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});

    return this._http.post(this._heroesUrl, body, options)
                .map(res => <Hero> res.json())
                .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);

    return Observable.throw(error.json().error || 'Server error');
  }
}
