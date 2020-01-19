import * as fromAssets from "../actions/assets.actions";
import {Asset} from "../../models/asset.model";

export interface AssetsState {
  assets: Array<Asset>;
  loaded: boolean
}

export const initialState = {
  assets: [],
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromAssets.AssetsAction
): AssetsState {
  switch (action.type) {
    case (fromAssets.SEARCH): {
      let assets = state.assets.filter((asset) => new RegExp(action.payload).test(asset.name));
      return {
        ...state,
        assets: assets
      }
    }
    case (fromAssets.FETCH_ASSETS_SUCCESS): {
      let assets = action.payload.map(asset => {
        return {id: asset.asset_id, name: asset.name, price: asset.price_usd}
      });
      return {
        ...state,
        assets: assets,
        loaded: true
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
