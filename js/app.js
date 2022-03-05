const API_KEY = `b9bd66f98f1ef986e7509389f8ef7a5a`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    // Set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}