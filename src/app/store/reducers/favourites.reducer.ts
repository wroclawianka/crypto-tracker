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
      let favIndex = state.data.findIndex(item => {
        return item.id === action.payload.id
      });
      (favIndex) ? state.data.push(action.payload) : state.data.splice(favIndex, 1);
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
