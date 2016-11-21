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

  constructor(private giphyService: GiphyService) {}

  ngOnInit() {

    let elt = document.querySelector('#giphySearch');
    let keyup$ = Observable.fromEvent(elt, 'keyup');

    let results = keyup$
      .debounce(() => Observable.interval(this.delay))
      .distinctUntilChanged()
      .map(k => this.giphyService.search(this.searchControl.value)
        .takeUntil(keyup$)
      )
      .concatAll()
      ;

      results.forEach(
        searchResults => this.resultSet = searchResults,
      );

  }

}
