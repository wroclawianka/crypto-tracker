import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Asset} from "../models/asset.model";

@Injectable({
  providedIn: 'root'
})
export class CoinApiService {
  private apiRoot = "https://rest.coinapi.io";
  private assetsUrl = `${this.apiRoot}/v1/assets`;

  constructor(private http: HttpClient) {
  }

  getAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(this.assetsUrl)
  }
}
