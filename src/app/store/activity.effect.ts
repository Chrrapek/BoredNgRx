import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivityItemModel} from '../activity-feature/model/activity-item.model';
import {addActivity, getActivityType} from './activity.actions';
import {EMPTY} from 'rxjs';

@Injectable()
export class ActivityEffect {

  getActivity$ = createEffect(() => this.actions$.pipe(
    ofType(getActivityType),
    mergeMap(() => this.http.get<ActivityItemModel>('https://www.boredapi.com/api/activity')
      .pipe(
        map(response => (addActivity(response))),
        catchError(() => EMPTY)
      ))
  ));

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
