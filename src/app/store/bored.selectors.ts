import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BoredItemsState} from './bored.reducer';

const getActivitiesFeatureState = createFeatureSelector<BoredItemsState>('activities');

export const getActivities = createSelector(getActivitiesFeatureState, state => state.activities);
