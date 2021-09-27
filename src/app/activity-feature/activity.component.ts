import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bored',
  template: `
    <div class="inputs-container">
      <app-bored-form></app-bored-form>
      <app-bored-api></app-bored-api>
    </div>
    <app-bored-list></app-bored-list>
  `,
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
