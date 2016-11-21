import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {

  constructor(
    private http: Http
  ) {}

  search (term: string) {
    let search = new URLSearchParams();
    search.set('api_key', 'dc6zaTOxFJmzC');
    search.set('q', term);
    search.set('rating', 'g');
    search.set('limit', '10');

    return this.http
      .get('http://api.giphy.com/v1/gifs/search', { search })
      .map(res => res.json()['data'])
      .map(image =>
        image.map(g => ({
          still: g.images.fixed_width_still,
          small: g.images.fixed_width_small,
          large: g.images.downsized_large
        })))
      ;
  }

}
