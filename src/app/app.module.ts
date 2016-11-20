import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ /* reducers here */ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
