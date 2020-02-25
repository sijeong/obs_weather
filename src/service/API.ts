const getWeather = (lat:number, lon: number) => {
    return fetch(`
    https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a7caa5dd04f2ad7c6f99c9bdf3bce02a

    `)
}

const getSeoulWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=a7caa5dd04f2ad7c6f99c9bdf3bce02a
`)
}
export {
    getWeather,
    getSeoulWeather
}