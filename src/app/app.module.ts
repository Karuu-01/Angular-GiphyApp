import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyTitleComponent } from './giphy-title/giphy-title.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyTitleComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
