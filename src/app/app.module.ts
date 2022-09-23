import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { LocationsModule } from './locations/locations.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';
import { AppState } from './app.state';
import { authReducer } from './auth/store/auth.reducer';
import { AuthEffects } from './auth/store/auth.effects';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { locationMapReducer } from './locations/store/location-map.reducer';
import { LocationEffects } from './locations/store/locations.effects';
import { trendingLocationsReducer } from './locations/store/trending-locations.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<AppState>({
      auth: authReducer,
      locationMap: locationMapReducer,
      trendingLocations: trendingLocationsReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AuthEffects, LocationEffects]),
    StoreRouterConnectingModule.forRoot(),
    MatSnackBarModule,
    SharedModule,
    AdminModule,
    LocationsModule,
    AuthModule,
    ProfileModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1500 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
