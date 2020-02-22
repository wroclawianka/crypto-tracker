import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";

import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {SearchComponent} from "./components/home-page/search/search.component";
import {HomePageComponent} from './components/home-page/home-page.component';
import {EditFavouritesComponent} from './components/edit-favourites/edit-favourites.component';
import {FavouritesComponent} from "./components/home-page/favourites/favourites.component";

import {CoinApiService} from "./services";

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from "@ngrx/effects";
import {reducers, effects} from "./store";
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCardModule} from "@angular/material/card";

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
    FavouritesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* Material UI */
    NoopAnimationsModule,
    MatSliderModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    /*Router */
    RouterModule.forRoot(
      appRoutes
    ),
    /*Store */
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    MatTableModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatCardModule
  ],
  providers: [
    CoinApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
