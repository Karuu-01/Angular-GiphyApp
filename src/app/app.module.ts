import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { GifsComponent } from './gifs/gifs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GisyService } from './gisy.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchDetailComponent,
    GifsComponent,
    NavbarComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GisyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
