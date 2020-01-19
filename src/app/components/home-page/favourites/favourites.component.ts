import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromStore from "../../../store";
import {Asset} from "../../../models/asset.model";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: Array<Asset>;

  constructor(private store: Store<fromStore.AssetsState>) {
  }

  ngOnInit() {
    this.store.select<any>('favourites').subscribe(state => {
      this.favourites = [...state.data]
    })
  }
}
