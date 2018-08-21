import Storage from './storage';
import Settings from './settings';
import geolib from 'geolib';

export default class RestaurantComponent{
    static getFavoritesWithinRange(lat, lon){
        let favorites = Storage.getFavorites(),
            restaurants = [];

        for(let i = 0; i < favorites.length; i++){
            let r = favorites[i];
            let distance = geolib.getDistance(
                {latitude: lat, longitude: lon},
                {latitude: r.coords.lat, longitude: r.coords.lon}
            );

            if(distance < Settings.miles(5)){
                restaurants.push(r);
            }
        }


        return restaurants;

    }
}