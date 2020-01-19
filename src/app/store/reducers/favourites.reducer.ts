import * as fromFav from "../actions/favourites.actions";
import {Asset} from "../../models/asset.model";


export interface FavState {
  data: Array<Asset>
}

export const initialState = {
  data: []
};

export function reducer(
  state = initialState,
  action: fromFav.FavouritesAction
): FavState {
  switch (action.type) {
    case (fromFav.EDIT_FAVOURITES): {
      let asset = action.payload;
      let favIndex = state.data.findIndex(item => item.id === asset.id);
      (favIndex) ? state.data.push(action.payload) : state.data.splice(favIndex, 1);
      return {
        ...state,
      }
    }
    case (fromFav.REMOVE_FAVOURITE): {
      let id = action.payload;
      let favIndex = state.data.findIndex(item => item.id === id);
      state.data.splice(favIndex, 1);
      return {
        ...state,
      }
    }
    default: {
      return {
        ...state
      };
    }
  }
}
