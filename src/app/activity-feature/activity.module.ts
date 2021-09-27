import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivityComponent} from './activity.component';
import {ActivityFormComponent} from './activity-form/activity-form.component';
import {ActivityApiComponent} from './activity-api/activity-api.component';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {StoreModule} from '@ngrx/store';
import {activityReducer} from '../store/activity.reducer';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {ActivityEffect} from '../store/activity.effect';

@NgModule({
  declarations: [ActivityComponent, ActivityFormComponent, ActivityApiComponent, ActivityListComponent],
  exports: [
    ActivityComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('activities', activityReducer),
    EffectsModule.forFeature([ActivityEffect])
  ]
})
export class ActivityModule { }
