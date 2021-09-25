import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoredComponent} from './bored.component';
import {BoredFormComponent} from './bored-form/bored-form.component';
import {BoredApiComponent} from './bored-api/bored-api.component';
import {BoredListComponent} from './bored-list/bored-list.component';
import {StoreModule} from '@ngrx/store';
import {activityReducer} from '../store/bored.reducer';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [BoredComponent, BoredFormComponent, BoredApiComponent, BoredListComponent],
  exports: [
    BoredComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('activities', activityReducer)
  ]
})
export class BoredModule { }
