import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ActivityItemModel} from '../activity-feature/model/activity-item.model';
import {activityAdded, activitiesRetrievedType} from './activity.actions';
import {EMPTY} from 'rxjs';

@Injectable()
export class ActivityEffect {

  constructor(private actions$: Actions, private http: HttpClient) {
  }

  getActivity$ = createEffect(() => this.actions$.pipe(
    ofType(activitiesRetrievedType),
    switchMap(() => this.http.get<ActivityItemModel>('https://www.boredapi.com/api/activity')
      .pipe(
        map(response => (activityAdded(response))),
        catchError(() => EMPTY)
      ))
  ));
}
