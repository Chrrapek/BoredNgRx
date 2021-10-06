import {createReducer, on} from '@ngrx/store';
import {activityAdded} from './activity.actions';
import {ActivityItemModel} from '../activity-feature/model/activity-item.model';

export interface ActivityItemsState {
  activities: ActivityItemModel[];
}

const initialState: ActivityItemsState = {activities: []};

export const activityReducer = createReducer(
  initialState,
  on(activityAdded, (state, payload) => ({
    ...state,
    activities: state.activities.concat(payload)
  }))
);
