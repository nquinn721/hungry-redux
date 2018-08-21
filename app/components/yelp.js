import Settings from './settings';
const apiKey = 'u83D7ql4RggokuyKsGHV7noCEF6IWAjIzfK14mqCyUcuqZzVRFl4MXjMfv2FgJEyLMxyICtAfmv9XQNO1-xu1E5n4YtuWc5GqQz6FVlcydzwwOIIsoa2qMQE0WnKWnYx';


let availableSearchParams = {
    term: true,
    radius: false,
    categories: true,
    price: true,
    limit: true
};

export default class YelpAPI{

    static search(term, cb){
        this.requestYelp(term, cb);
    }

    static requestYelp(params, cb){
        let lat = params.lat || 39.9826142;
        let lng = params.lng || -83.2710139;
        let paramString = 'latitude=' + lat + '&longitude=' + lng;

        console.log('params 1');
        console.log(params);

        // Filters
        let limit = 50,
            radius = Settings.miles(5),
            sortBy = 'distance',
            openNow = true;

        console.log('params 2');
        console.log(params);

        if(typeof params == 'object'){
            for(let i in params) {
                if (availableSearchParams[i]) {
                    if(i === 'radius')
                        params[i] = Math.round(params[i] * mile);

                    paramString += '&' + i + '=' + params[i];
                }
            }
        }



        paramString += `&limit=${limit}`//&radius=${radius}&sort_by=${sortBy}&open_now=${openNow}`; 

        if(!params.term)
            paramString += '&term=food';



        console.log('para');
        console.log(paramString);
        fetch('https://api.yelp.com/v3/businesses/search?' + paramString, {
            method: 'GET',
            headers: {
                'Authorization':  'Bearer ' + apiKey
            },
        })
            .then(d => d.json())
            .then(d => {
                console.log(d);
                cb(d.businesses)
            })
            .catch(e => console.error(e))
    }
}