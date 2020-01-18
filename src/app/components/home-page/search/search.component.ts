import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Asset} from "../../../models/asset.model";
import {Observable} from "rxjs";
import * as fromStore from '../../../store'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string;
  assets$: Observable<Array<Asset>>;
  loaded$: Observable<boolean>;

  constructor(private store: Store<fromStore.AssetsState>) {
  }

  ngOnInit() {
    this.store.select<any>('assets').subscribe(state => {
      this.assets$ = state.assets;
      this.loaded$ = state.loaded;
      this.searchValue =  "";
    });
    this.store.dispatch(new fromStore.FetchAssets())
  }

  onKey(e) {
    this.searchValue = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();
    this.store.dispatch(new fromStore.Search(this.searchValue))
  }

  editFavourites(asset) {
    this.store.dispatch((new fromStore.EditFavourites(asset)))
  }
}
