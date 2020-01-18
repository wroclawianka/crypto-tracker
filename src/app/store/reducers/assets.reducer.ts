import * as fromAssets from "../actions/assets.actions";
import {Asset} from "../../models/asset.model";

export interface AssetsState {
  assets: Array<Asset>
}

export const initialState = {
  assets: []
};

export function reducer(
  state = initialState,
  action: fromAssets.AssetsAction
): AssetsState {
  switch (action.type) {
    case (fromAssets.SEARCH): {
      return {
        ...state,
      }
    }
    case (fromAssets.FETCH_ASSETS): {
      return {
        ...state,
          assets: []
      }
    }
    case (fromAssets.FETCH_ASSETS_SUCCESS): {
      let assets = action.payload.map(asset => {
        return {id: asset.asset_id, name: asset.name, price_usd: asset.price_usd}
      });
      return {
        ...state,
        assets: assets,
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
