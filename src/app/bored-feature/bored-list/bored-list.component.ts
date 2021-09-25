import {Component, OnInit} from '@angular/core';
import {State} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {BoredItemModel} from '../model/bored-item.model';
import {getActivities} from '../../store/bored.selectors';

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
  styleUrls: ['./bored-list.component.scss']
})
export class BoredListComponent implements OnInit {

  activities: BoredItemModel[] = [];

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.select(getActivities)
      .subscribe(activities => this.activities = activities);
  }

}
