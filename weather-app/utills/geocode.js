const request =  require('request');
const getGeoCode = (address, callback) => {

    const mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1IjoicmF2aWthbnQta3VtYXIiLCJhIjoiY2pmYzh2YnhsMW5nZjQwcGQ0OHpnaWg3ayJ9.9A4iQoj9PprjvsvQeTdx4w";

    request({ 'url': mapboxURL, 'json': true }, (error, {body}) => {
        // console.log(body.features);
        if (error) {
            callback('unable to connect socation services', undefined);
        } else if (!body.features || !body.features.length) {
            callback('unable to find location. Try another search', undefined);
        } else {
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const location = body.features[0].place_name;

            const latLong = {
                'latitude': latitude,
                'longitude': longitude,
                'location': location
            }
            callback(undefined, latLong);
        }
    })
}

module.exports = getGeoCode;