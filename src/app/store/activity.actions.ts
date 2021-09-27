import {createAction, props} from '@ngrx/store';
import {ActivityItemModel} from '../activity-feature/model/activity-item.model';

export const addActivityType = 'Add activity';
export const getActivityType = 'Get activity';

export const addActivity = createAction(addActivityType, props<ActivityItemModel>());
export const getActivity = createAction(getActivityType);
