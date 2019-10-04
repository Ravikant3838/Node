const request = require('request');
const getGeoCode = require('./utills/geocode')
const getForecast = require('./utills/forecast')

const address = process.argv[2];
// console.log(process.argv);
if(!address){
    console.log("Please enter any Location");
}else {
    getGeoCode(address, (error, response) => {
        if(error) {
            return console.log(error);
        } 
        
        getForecast(response, (error, {summary, temperature, precipProbability}) => {
            if(error){
                return console.log(error);
            }
            console.log("Weather Forecast For " + response.location +" : " + summary + " It is currenctly " + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.');
        })
    });
}