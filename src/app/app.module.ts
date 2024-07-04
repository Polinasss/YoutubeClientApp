import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { SearchResultsComponentModule } from './search/search-response.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortComponent,
  ],
  imports: [
    SearchResultsComponentModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
