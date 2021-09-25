import {Action, createReducer, on} from '@ngrx/store';
import {addActivity} from './bored.actions';
import {BoredItemModel} from '../bored-feature/model/bored-item.model';

export interface BoredItemsState {
  activities: BoredItemModel[];
}

export const initialState: BoredItemsState = {activities: []};

const boredReducer = createReducer(
  initialState,
  on(addActivity, (state, payload) => ({
    ...state,
    activities: [...state.activities, {
      activity: payload.activity,
      participants: payload.participants
    } as BoredItemModel]
  }))
);

export function activityReducer(state: BoredItemsState, action: Action): BoredItemsState {
  return boredReducer(state, action);
}
