import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import {ActivityItemModel} from '../model/activity-item.model';
import {activityAdded} from '../../store/activity.actions';

@Component({
  selector: 'app-bored-form',
  template: `
    <div class="form-container">
      <h2>Add your own activity</h2>
      <form (ngSubmit)="onSubmit()" #activityForm="ngForm">
        <div class="form-group">
          <label for="activity">Name</label>
          <input type="text" class="form-control" id="activity"
                 [placeholder]="'Name'"
                 required
                 [(ngModel)]="model.activity" name="activity">
        </div>

        <div class="form-group">
          <label for="participants">Number of parcitipants</label>
          <input type="number" class="form-control" id="participants"
                 [(ngModel)]="model.participants" name="participants">
        </div>

        <button type="submit" class="submit-button" [disabled]="!activityForm.form.valid">Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent {

  model: ActivityItemModel = this.newModel();

  constructor(private store: Store<State>) {
  }

  onSubmit(): void {
    this.store.dispatch(activityAdded(this.model));
    this.model = this.newModel();
  }

  private newModel(): ActivityItemModel {
    return {
      activity: '',
      participants: 0
    };
  }

}
