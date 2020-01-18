import {Action} from '@ngrx/store';

export const SEARCH = '[ASSETS] Search';
export const FETCH_ASSETS = '[ASSETS] Fetch Assets';
export const FETCH_ASSETS_FAIL = '[ASSETS] Fetch Assets Fail';
export const FETCH_ASSETS_SUCCESS = '[ASSETS] Fetch Assets Success';

export class Search implements Action {
  readonly type: string = SEARCH;

  constructor(public payload: any) {
    console.log("ACTION " + SEARCH)
  };
}

export class FetchAssets implements Action {
  readonly type: string = FETCH_ASSETS;

  constructor(public payload: any) {
    console.log("ACTION " + FETCH_ASSETS)
  };
}

export class FetchAssetsSuccess implements Action {
  readonly type: string = FETCH_ASSETS_SUCCESS;

  constructor(public payload: any) {
    console.log("ACTION " + FETCH_ASSETS_SUCCESS)
  };
}

export class FetchAssetsFail implements Action {
  readonly type: string = FETCH_ASSETS_FAIL;

  constructor(public payload: any) {
    console.log("ACTION " + FETCH_ASSETS_FAIL)
  };
}


export type AssetsAction = Search | FetchAssets | FetchAssetsFail | FetchAssetsSuccess;

