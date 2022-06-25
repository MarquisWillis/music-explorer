// ADD PSUEDO CODE

// static selectors
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");
let searchBtn = document.querySelector("#searchButton");

let searchContainerEl = document.querySelector("#search-result");
let eventContainerEl = document.querySelector("#event-container");

const token = "a8yMuGaFL4Zrzhb2V2sOhHkAOPVwaAEy";


// functions

function testTicket() {
    let artist = encodeURI(artistInput.value);
    let location = encodeURI(locationInput.value);

    let urlCurrent = `https://app.ticketmaster.com/discovery/v2/events?apikey=${token}&keyword=${artist}&locale=*&city=${location}`

    fetch(urlCurrent).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(data) {
        console.log(data);

        for (let i = 0; i < data._embedded.events.length; i++) {

            
            let currentDate = data._embedded.events[i].dates.start.localDate;
            let currentTime = data._embedded.events[i].dates.start.localTime;

            console.log(currentDate, currentTime)


            let eventCard = document.createElement("div")

            let dateEl = document.createElement("p")
            let timeEl = document.createElement("p");
            
            dateEl.textContext = currentDate
            timeEl.textContext = currentTime
            
            eventCard.appendChild(dateEl)
            eventCard.appendChild(timeEl)
            
            eventContainerEl.appendChild(eventCard)
        }
    })

        
    }

// event listeners
searchBtn.addEventListener("click", testTicket);