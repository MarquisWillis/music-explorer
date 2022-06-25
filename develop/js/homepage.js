let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector('#location-input');
let searchBtn = document.getElementById("search-btn");

const ticketAPI = "RzI45m3FO2OtUTWzp7AQgANbQRJxY157"

function getLocation() {
    var requestUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${ticketAPI}&locale=*&city=${locationInput}`
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            for (let i = 0; i < data.length; i++) {
                let listItem = document.createElement('li');
                listItem.textContent = data[i].html_url
                locationResult.appendChild(listItem);
            }
        })
}


searchBtn.addEventListener('click', getLocation);