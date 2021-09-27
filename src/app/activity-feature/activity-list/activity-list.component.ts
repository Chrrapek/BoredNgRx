import {Component, OnInit} from '@angular/core';
import {State} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {ActivityItemModel} from '../model/activity-item.model';
import {getActivities} from '../../store/activity.selectors';

@Component({
  selector: 'app-bored-list',
  template: `
    <div *ngFor="let activity of activities" class="activity-container">
      <div class="activity-name">
        {{activity.activity}}
      </div>
      <div class="activity-participants">
        {{activity.participants}}
      </div>
    </div>
  `,
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities: ActivityItemModel[] = [];

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.select(getActivities)
      .subscribe(activities => this.activities = activities);
  }

}
