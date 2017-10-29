import { combineReducers } from 'redux';
import restaurants from './restaurants';
import nav from './nav';
import settings from './settings';

const rootReducer = combineReducers({
	restaurants,
	nav,
	settings,
});

export default rootReducer;