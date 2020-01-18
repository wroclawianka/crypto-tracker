import {Action} from '@ngrx/store';

export const EDIT_FAVOURITES = '[ASSETS] Edit Favourites';

export class EditFavourites implements Action {
  readonly type: string = EDIT_FAVOURITES;

  constructor(public payload: any) {
    console.log("ACTION " + EDIT_FAVOURITES)
  };
}

export type FavouritesAction = EditFavourites;
