import { combineReducers } from 'redux';
import * as features from 'features/reducer';

export const rootReducer = combineReducers({
	...features
});