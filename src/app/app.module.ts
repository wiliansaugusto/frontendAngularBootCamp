import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SharedModule } from './shared/shared.module';

import localePt from '@angular/common/locales/pt';
import { provideRoutes } from '@angular/router';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
