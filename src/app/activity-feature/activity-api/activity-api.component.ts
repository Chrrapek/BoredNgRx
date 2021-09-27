import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {getActivity} from '../../store/activity.actions';
import {State} from '../../store/app.state';

@Component({
  selector: 'app-bored-api',
  template: `
    <div class="api-button" (click)="getActivity()">Get one random activity!</div>
  `,
  styleUrls: ['./activity-api.component.scss']
})
export class ActivityApiComponent {

  constructor(private http: HttpClient,
              private store: Store<State>) {
  }

  getActivity(): void {
    this.store.dispatch(getActivity());
  }
}
