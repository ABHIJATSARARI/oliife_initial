export const SET_HEALTH_METRICS = 'SET_HEALTH_METRICS';
export const SET_SLEEP_DATA = 'SET_SLEEP_DATA';

export const setHealthMetrics = (metrics) => ({
  type: SET_HEALTH_METRICS,
  payload: metrics,
});

export const setSleepData = (data) => ({
  type: SET_SLEEP_DATA,
  payload: data,
});

// Add more actions as needed
