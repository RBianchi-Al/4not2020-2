import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './ui/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderBarComponent } from './ui/header-bar/header-bar.component';
import { MaterialModule } from './material/material.module';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderBarComponent,
    MainFooterComponent,
    MainMenuComponent,
    CursoListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
