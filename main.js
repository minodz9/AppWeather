let choiceCity;
// getTemperature(choiceCity);
if ('geolocation' in navigator) {

  navigator.geolocation.watchPosition(position => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
    console.log(url)

    let request = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
    request.open('GET', url); // Nous récupérons juste des données
    request.responseType = 'json'; // Nous attendons du JSON
    request.send(); // Nous envoyons notre requête

    // Dès qu'on reçoit une réponse, cette fonction est executée
    request.onload = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          let reponse = request.response;
          console.log(reponse);
          let temperature = reponse.main.temp;
          let city = reponse.name;
          // console.log(temperature);
          document.querySelector('#temperature_label').textContent = temperature;
          document.querySelector('#city').textContent = city;
        }
        else {
          alert('Un problème est intervenu, merci de revenir plus tard.');
        }
      }
    }

  }, error, options);

} else {

  changeCity = 'Paris';
  getTemperature(changeCity);
}


function error() {

  changeCity = 'Paris';
  getTemperature(changeCity);
}

var options = {

  enableHighAccuracy: true
}

let changeCity = document.querySelector('#change');
changeCity.addEventListener('click', () => {
  choiceCity = prompt('Quelle ville souhaitez-vous voir ?');
  getTemperature(choiceCity);
});

function getTemperature(city) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

  let request = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  request.open('GET', url); // Nous récupérons juste des données
  request.responseType = 'json'; // Nous attendons du JSON
  request.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let reponse = request.response;
        console.log(reponse);
        let temperature = reponse.main.temp;
        let city = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#city').textContent = city;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}