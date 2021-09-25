import {createReducer, on} from '@ngrx/store';
import {addActivity} from './bored.actions';
import {BoredItemModel} from '../bored-feature/model/bored-item.model';

export interface BoredItemsState {
  activities: BoredItemModel[];
}

export const initialState: BoredItemsState = { activities: [] };

export const boredReducer = createReducer(
  initialState,
  on(addActivity, (state, payload) => ({
    ...state,
    activities: state.activities.concat(payload)
  }))
);
