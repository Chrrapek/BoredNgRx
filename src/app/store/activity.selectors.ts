import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ActivityItemsState} from './activity.reducer';

const getActivitiesFeatureState = createFeatureSelector<ActivityItemsState>('activities');

export const getActivities = createSelector(getActivitiesFeatureState, state => state.activities);
