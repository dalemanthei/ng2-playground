import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { GiphyService } from './giphy.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  title: String = 'Searchbox';
  searchControl = new FormControl();
  delay: number = 400;
  resultSet: Array<any>;

  // giphys$: Observable<{}> = this.giphyService.giphys$;
  // giphys$: Observable<Object[]> = this.store.select('giphys');

  constructor(
    private giphyService: GiphyService
  ) {}

  ngOnInit() {

    // this.giphys$ = this.giphyService.giphys$;
    // this.giphyService.searchLoad('foo');

    let elt = document.querySelector('#giphySearch');
    let keyup$ = Observable.fromEvent(elt, 'keyup');

    keyup$
      .debounce(() => Observable.interval(this.delay))
      .distinctUntilChanged()
      .map(k => this.giphyService.search(this.searchControl.value)
        .takeUntil(keyup$)
      )
      .concatAll()
      .subscribe(searchResults => this.resultSet = searchResults)
      ;

    }
}
