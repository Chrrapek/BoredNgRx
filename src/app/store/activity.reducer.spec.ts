import {ActivityItemModel} from '../activity-feature/model/activity-item.model';
import {activityAdded} from './activity.actions';
import {ActivityItemsState, activityReducer} from './activity.reducer';

describe('Activity reducer test', () => {
  function createState(activities: ActivityItemModel[]): ActivityItemsState {
    return {activities: [...activities]};
  }

  it('should add new activity', () => {
    // given
    const state = createState([]);
    const newActivityName = 'New activity';
    const newActivityParticipants = 2;
    const action = activityAdded({activity: newActivityName, participants: newActivityParticipants});

    // when
    const newState = activityReducer(state, action);

    // then
    expect(newState.activities.length).toBe(1);
    expect(newState.activities[0].activity).toEqual(newActivityName);
    expect(newState.activities[0].participants).toEqual(newActivityParticipants);
  });
});
