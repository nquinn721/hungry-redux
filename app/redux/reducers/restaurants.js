const initialState = {
	random: function () {
		let availableRestaurants = this.availableRestaurants,
			randomNum = Math.round(Math.random() * (availableRestaurants.length - 1)),
			restaurant = availableRestaurants[randomNum];

		if(randomNum === this.currentRandomNumber){
			return this.random();
		}

		this.currentRandomNumber = randomNum;

		return restaurant;
    },
	availableRestaurants: [],
	disable: function (i) {
		this.restaurants[i].disabled = !this.restaurants[i].disabled;
		this.availableRestaurants = this.restaurants.filter(r => !r.disabled);
    },
	restaurants: null,
	currentRestaurant: {name: 'Hungry?', location: {display_address: ['Hungry is here to help you find the perfect place to eat based on your interest']}, image_url: 'http://www.ozarlington.com/wp-content/uploads/2017/04/bar-buffet.jpg'},
	isFetching: true,
	error: false
};


export default (state = initialState, action) => {
	
	switch(action.type){
		case 'GETTING_RESTRAUNTS':
			return {
				...state,
				isFetching: true
			};
		case 'SET_RESTAURANTS':
			console.log(action.data)
			return {
				...state,
                isFetching: false,
                restaurants: action.data.length && action.data,
				availableRestaurants: action.data && action.data.filter(r => !r.disabled)
			}
		case 'SET_CURRENT_RESTAURANT': 
			return {
				...state,
				isFetching: false,
				currentRestaurant: action.data
            };
		default:
			return state;
	}
}
