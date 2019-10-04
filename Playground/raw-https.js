const https = require('https');

const url = 'https://api.darksky.net/forecast/a5ea438a32d28f3ba8ab77cfb4c4f78f/42.3605,-71.0596?units=si';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunks) => {
        console.log(chunks);
        data = data + chunks.toString()
    })

    response.on('end', () => {
        data = JSON.parse(data)
        console.log(data);
    })

});

request.on('error', (error) => {
    console.log(error);
})

request.end();