let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector('#location-input');
let searchBtn = document.getElementById("search-btn");

const API_KEY = "RzI45m3FO2OtUTWzp7AQgANbQRJxY157"

function getLocation() {
    let scriptTag = document.createElement('script');
    let queryString = document.querySelector('#location-input').value

    scriptTag.setAttribute('src', `https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&keyword=${artistInput}&locale=*&city=${locationInput}`)
    document.querySelector('head').appendChild(scriptTag)

    function result (data) {
        //TODO code to handle incoming data from API call
        console.log(data)
        searchBtn.innerHTML = data.location.Results[0].Name
    }
}

searchBtn.addEventListener ("click", function ()
 {

    getLocation();
})