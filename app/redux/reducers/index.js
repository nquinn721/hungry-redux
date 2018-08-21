import { combineReducers } from 'redux';
import restaurants from './restaurants';
import nav from './nav';

const rootReducer = combineReducers({
	restaurants,
	nav,
});

export default rootReducer;