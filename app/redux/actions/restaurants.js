import Service from './service';
import YelpApi from '../../components/yelp';

export const updateRestaurants = (lat, lng) => {
	return function (dispatch) {
		dispatch({type: 'GETTING_RESTRAUNTS'});
        YelpApi.search({lat, lng}, (data) => {
        	dispatch({
        		type: 'SET_RESTAURANTS',
				data
			})
		})
    }

}


export const setRestaurant = (restaurant) => {
	return function(dispatch) {
		dispatch({
			type: 'SET_CURRENT_RESTAURANT',
			data: restaurant
		})
	}
};

