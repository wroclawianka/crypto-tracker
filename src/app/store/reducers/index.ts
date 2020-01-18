import { ActionReducerMap } from "@ngrx/store";

import * as fromAssets from './assets.reducer';

export interface AssetsState {
  assets: fromAssets.AssetsState
}

export const reducers: ActionReducerMap<AssetsState> = {
  assets: fromAssets.reducer
};
