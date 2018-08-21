/**
 * Restaurant Object
 * {
 *      name: String,
 *      address: String,
 *      coords: Object,
 *      favorite: Bool,
 *      skipped: Number,
 *      lastVisited: Date,
 *      timesVisited: Number
 * }
 */


export default class Storage {

    static async addRestaurant(obj){
        let restaurants = JSON.parse(await this.get('restaurants'));
        restaurants.push(obj);
        return this.set('restaurants', JSON.stringify(restaurants));
    }
    static async getRestaurants(){
        return JSON.parse(await this.get('restaurants'));
    }

    static async getFavorites(){
        let restaurants = JSON.parse(await this.get('restaurants'));
        return restaurants.filter(r => r.favorite);
    }

    async set(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
            return true;
        } catch (error) {
            return {error};
        }
    }

    async get(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (error) {
            return {error};
        }
    }
}