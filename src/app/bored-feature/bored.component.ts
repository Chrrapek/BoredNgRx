import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bored',
  template: `
    <div>
      <app-bored-api></app-bored-api>
      <app-bored-form></app-bored-form>
      <app-bored-list></app-bored-list>
    </div>
  `,
  styleUrls: ['./bored.component.scss']
})
export class BoredComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
