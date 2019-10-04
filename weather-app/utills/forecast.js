const request = require('request');

const forecast = ({latitude, longitude}, callback) => { 
    const url = 'https://api.darksky.net/forecast/a5ea438a32d28f3ba8ab77cfb4c4f78f/'+ latitude +','+ longitude +'?units=si';

    request({ 'url': url, 'json': true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to network.", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            const currentWeatherData = body.currently;
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: currentWeatherData.temperature,
                precipProbability: currentWeatherData.precipProbability
            })
            // console.log("It is currenctly " +  + ' degrees out. There is a ' + currentWeatherData.precipProbability + '% chance of rain.') 
        }
    });
}

module.exports = forecast;

