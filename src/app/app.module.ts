import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BoredModule} from './bored-feature/bored.module';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BoredModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
