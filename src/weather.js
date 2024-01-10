const apiKey = '04296c19ca2a34a3d4334e46237dedc6'

const iconUrlGenerator = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`


const getApiData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    try {
        const response = await fetch(URL)
        const data = await response.json()


        if (data.cod === '404') {
            // City not found
            return null;
          }

        const { weather, main: { temp, feel_like, temp_min, temp_max, pressure, humidty }, wind: { speed }, sys: { country }, name, } = data;

        const { description, icon } = weather[0];

        return {
            description,
            iconURL: iconUrlGenerator(icon),
            temp,
            feel_like,
            temp_min,
            temp_max,
            pressure,
            humidty,
            speed,
            country,
            name,
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

export { getApiData };

