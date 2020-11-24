import { combineReducers } from 'redux';

import { apiStatus } from './ApiStatus/ApiStatus.reducer';
// import reservationSettings from './FormSubmissions/formSubmissions.reducer';

const rootReducer = () => combineReducers({
  apiStatus,
});

export default rootReducer;
