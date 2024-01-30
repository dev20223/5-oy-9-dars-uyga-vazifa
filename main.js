const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDatelist = document.querySelector('.weather-detalist');

search.addEventListener('click', () => {

    const APIKEY = '728f91d08659c56475f03cb93efb176f';

    const city = document.querySelector('.search-box input').value;

    if (city == ' ')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric
    &appid=${APIKEY}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperetura = document.querySelector('.weather-box .temperetura');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-datelist .humidity span');
        const wind = document.querySelector('.weather-datelist .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'img/clouds-transparent-background-81.png';

                break;

            case 'Rain':
                image.src = 'img/clouds-transparent-background-81.png';

                break;

            case 'Snow':
                image.src = 'img/clouds-transparent-background-81.png';

                break;

            case 'Clouds':
                image.src = 'img/clouds-transparent-background-81.png';

                break;

            case 'Mist':
                image.src = 'img/clouds-transparent-background-81.png';

                break;

            case 'Haze':
                    image.src = 'img/clouds-transparent-background-81.png';
                    
                    break;

            default:
                image.src = 'img/clouds-transparent-background-81.png';
        }



        temperetura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });

});