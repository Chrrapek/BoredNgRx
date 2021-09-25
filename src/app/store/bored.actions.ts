import {createAction, props} from '@ngrx/store';
import {BoredItemModel} from '../bored-feature/model/bored-item.model';

export const addActivity = createAction('[Bored] Add activity', props<BoredItemModel>());
