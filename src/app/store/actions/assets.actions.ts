import {Action} from '@ngrx/store';

export const SEARCH = '[ASSETS] Search';
export const FETCH_ASSETS = '[ASSETS] Fetch Assets';
export const FETCH_ASSETS_SUCCESS = '[ASSETS] Fetch Assets Success';

export class Search implements Action {
  readonly type: string = SEARCH;

  constructor(public payload: any) {
  };
}

export class FetchAssets implements Action {
  readonly type: string = FETCH_ASSETS;

  constructor(public payload: any) {
  };
}

export class FetchAssetsSuccess implements Action {
  readonly type: string = FETCH_ASSETS_SUCCESS;

  constructor(public payload: any) {
  };
}

export type AssetsAction = Search | FetchAssets | FetchAssetsSuccess;

