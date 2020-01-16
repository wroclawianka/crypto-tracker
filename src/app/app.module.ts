import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CoinApiService} from "./services/coin-api.service";

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {SearchComponent} from "./components/home-page/search/search.component";

import {MatSliderModule} from '@angular/material/slider';
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {EditFavouritesComponent} from './components/edit-favourites/edit-favourites.component';

const appRoutes: Routes = [
  {
    path: 'edit-favourites',
    component: EditFavouritesComponent
  },
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomePageComponent,
    EditFavouritesComponent,
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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    CoinApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
