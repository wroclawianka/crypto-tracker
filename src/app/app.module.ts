import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CoinApiService} from "./services/coin-api.service";

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSliderModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    CoinApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
