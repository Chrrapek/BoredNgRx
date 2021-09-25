import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.state';
import {BoredItemModel} from '../model/bored-item.model';
import {addActivity} from '../../store/bored.actions';

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
  styleUrls: ['./bored-form.component.scss']
})
export class BoredFormComponent implements OnInit {

  model: BoredItemModel = this.newModel();

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.store.dispatch(addActivity(this.model));
    this.model = this.newModel();
  }

  private newModel = (): BoredItemModel => ({
    activity: '',
    participants: 0
  });

}
