import {ActionReducerMap} from "@ngrx/store";

import * as fromAssets from './assets.reducer';
import * as fromFav from './favourites.reducer';

export interface AssetsState {
  assets: fromAssets.AssetsState,
  favourites: fromFav.FavState
}

export const reducers: ActionReducerMap<AssetsState> = {
  assets: fromAssets.reducer,
  favourites: fromFav.reducer
};
