const fetch = require("node-fetch")
const WEATHERSTACK_KEY = "4ead2d8ac59f167442a07ed4b76567b0"

const fetchNow = async (city) => {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${WEATHERSTACK_KEY}&query=${city}`);
    const data = await response.json()
    const now = {
        country: data.location.country,
        location: data.location.name,
        longitude: data.location.lon,
        latitude: data.location.lat,
        temparature: data.current.temperature,
        condition: data.current.weather_descriptions
    }

    console.log(now)
}

const weatherForecast = async (city) => {
    const response = await fetch(`http://api.weatherstack.com/forecast?access_key=${WEATHERSTACK_KEY}&query=${city}`)
    const data = await response.json()
   // console.log(data)
    console.log(data.forecast)
}


module.exports = {
    fetchNow,
    weatherForecast
}