import { combineReducers } from 'redux';
import applicationReducer, { ApplicationReducersState } from './application';

export interface RootState {
  applicationReducer: ApplicationReducersState;
}

export default combineReducers({
  applicationReducer
});