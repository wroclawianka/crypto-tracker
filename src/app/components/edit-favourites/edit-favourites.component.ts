import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromStore from "../../store";
import {Asset} from "../../models/asset.model";

@Component({
  selector: 'app-edit-favourites',
  templateUrl: './edit-favourites.component.html',
  styleUrls: ['./edit-favourites.component.css']
})
export class EditFavouritesComponent implements OnInit {
  favourites$: Observable<Array<Asset>>;

  constructor(private store: Store<fromStore.AssetsState>) {
  }

  ngOnInit() {
    this.store.select<any>('favourites').subscribe(state => {
      this.favourites$ = state.data
    })
  }

  removeElement(id) {
    this.store.dispatch((new fromStore.RemoveFavourite(id)))
  }

}
