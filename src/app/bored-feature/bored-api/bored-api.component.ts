import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BoredItemModel} from '../model/bored-item.model';
import {Store} from '@ngrx/store';
import {addActivity} from '../../store/bored.actions';
import {State} from '../../store/app.state';

@Component({
  selector: 'app-bored-api',
  template: `
    <div class="api-button" (click)="getActivity()">Get one random activity!</div>
  `,
  styleUrls: ['./bored-api.component.scss']
})
export class BoredApiComponent implements OnInit {

  constructor(private http: HttpClient,
              private store: Store<State>) {
  }

  ngOnInit(): void {
  }

  getActivity(): void {
    this.http.get<BoredItemModel>('https://www.boredapi.com/api/activity')
      .subscribe(model => this.store.dispatch(addActivity(model)));
  }
}
