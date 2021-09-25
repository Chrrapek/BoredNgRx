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
  styleUrls: ['./bored.component.scss']
})
export class BoredComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
