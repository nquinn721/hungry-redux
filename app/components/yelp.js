
const apiKey = 'u83D7ql4RggokuyKsGHV7noCEF6IWAjIzfK14mqCyUcuqZzVRFl4MXjMfv2FgJEyLMxyICtAfmv9XQNO1-xu1E5n4YtuWc5GqQz6FVlcydzwwOIIsoa2qMQE0WnKWnYx';
const mile = 1609.34;

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

        if(typeof params == 'object'){
            for(let i in params) {
                if (availableSearchParams[i]) {
                    if(i === 'radius')
                        params[i] = Math.round(params[i] * mile);

                    paramString += '&' + i + '=' + params[i];
                }
            }
        }
        paramString += `&limit=50&radius=${Math.round(5 * mile)}&sort_by=distance&open_now=true`;

        if(!params.term)
            paramString += '&term=restuarants';

        console.log(paramString)
        fetch('https://api.yelp.com/v3/businesses/search?' + paramString, {
            method: 'GET',
            headers: {
                'Authorization':  'Bearer ' + apiKey
            },
        })
            .then(d => d.json())
            .then(d => {
                cb(d.businesses)
            })
            .catch(e => console.error(e))

    }



}