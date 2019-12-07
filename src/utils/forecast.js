const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/be73aa495304167ed35dd92d7da35a51/' + latitude + ',' + longitude + '?units=si&lang=en'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather Service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out there. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast