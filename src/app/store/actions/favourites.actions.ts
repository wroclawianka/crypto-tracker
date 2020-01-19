import {Action} from '@ngrx/store';

export const EDIT_FAVOURITES = '[FAV] Edit Favourites';
export const REMOVE_FAVOURITE = '[FAV] Remove Favourite';

export class EditFavourites implements Action {
  readonly type: string = EDIT_FAVOURITES;

  constructor(public payload: any) {
  };
}

export class RemoveFavourite implements Action {
  readonly type: string = REMOVE_FAVOURITE;

  constructor(public payload: any) {
  };
}

export type FavouritesAction = EditFavourites | RemoveFavourite;
