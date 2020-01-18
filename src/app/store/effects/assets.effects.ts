import {Injectable} from "@angular/core";

import {Effect, Actions, ofType} from "@ngrx/effects";
import {map, switchMap} from 'rxjs/operators'

import * as assetsActions from '../actions/assets.actions'
import {CoinApiService} from "../../services";

@Injectable()
export class AssetsEffects {
  constructor(
    private actions$: Actions,
    private coinApiService: CoinApiService
  ) {
  }

  @Effect()
  fetchAssets$ = this.actions$.pipe(
    ofType(assetsActions.FETCH_ASSETS))
    .pipe(switchMap(() => {
        return this.coinApiService.getAssets().pipe(
          map(assets => new assetsActions.FetchAssetsSuccess(assets))
        )
      })
    )
}
