import {createAction, props} from '@ngrx/store';
import {ActivityItemModel} from '../activity-feature/model/activity-item.model';

export const activityAddedType = '[activity] Activity added';
export const activitiesRetrievedType = '[activity] Activities retrieved';

export const activityAdded = createAction(activityAddedType, props<ActivityItemModel>());
export const activitiesRetrieved = createAction(activitiesRetrievedType);
