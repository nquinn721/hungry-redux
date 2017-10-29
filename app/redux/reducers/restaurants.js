const initialState = {
	restaurants: [
		{name: 'Donatos', address: '123 main st', image: 'http://www.ozarlington.com/wp-content/uploads/2017/04/bar-buffet.jpg'},
		{name: 'Papa Johns', address: '524 walter st', image: 'http://www.realdetroitweekly.com/wp-content/uploads/2017/06/Restaurants.jpg'}
	],
	currentRestaurant: {name: 'Donatos', address: '123 main st', image: 'http://www.ozarlington.com/wp-content/uploads/2017/04/bar-buffet.jpg'},
	isFetching: false,
	error: false
}


export default (state = initialState, action) => {
	
	switch(action.type){
		case 'GETING_REST':
			return {
				...state,
				isFetching: true
			}
		case 'SET_CURRENT_RESTAURANT': 
			return {
				...state,
				isFetching: false,
				currentRestaurant: action.data
			}
		default:
			return state;
	}
}
