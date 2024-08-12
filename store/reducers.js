import { combineReducers } from 'redux';
import { SET_HEALTH_METRICS, SET_SLEEP_DATA } from './actions';

const healthMetricsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_HEALTH_METRICS:
      return action.payload;
    default:
      return state;
  }
};

const sleepDataReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SLEEP_DATA:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  healthMetrics: healthMetricsReducer,
  sleepData: sleepDataReducer,
  // Add more reducers as needed
});

export default rootReducer;
