const request = require('request')
const moment = require('moment')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b99a0098be9586a2e3853323eeedb71b/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            var timenow = moment(body.currently.time*1000).format("MMM Do, YYYY - HH:mm:ss ZZ");
            weatherData = 'On ' + timenow + ', ' + body.daily.data[0].summary + 
            ' It is currently ' + body.currently.temperature + 'º.' + 
            ' There is a ' + body.currently.precipProbability + '% chance of rain.'
                    
            callback(undefined, weatherData)
        }
    })
}

module.exports = forecast