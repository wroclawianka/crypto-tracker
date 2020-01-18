import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Asset} from "../../../models/asset.model";
import {Observable} from "rxjs";
import * as fromStore from '../../../store'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchValue: string;
  assets$: Observable<Array<Asset>>;

  constructor(private store: Store<fromStore.AssetsState>) {
  }

  ngOnInit() {
    this.store.select<any>('assets').subscribe(state => {
      this.assets$ = state.assets;
    });
    this.store.dispatch(new fromStore.FetchAssets())
  }

  onKey(e) {
    e.preventDefault();
    this.store.dispatch(new fromStore.Search(e.target.value))
  }
}
