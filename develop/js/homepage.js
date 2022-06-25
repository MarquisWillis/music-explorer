// ADD PSUEDO CODE

// static selectors
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");
let searchBtn = document.querySelector("#search-btn");

let genreCardEl = document.querySelectorAll(".genreCard");

let searchContainerEl = document.querySelector("#search-result");
let additionalContainerEl = document.querySelector("#additional-container");

const token = "a8yMuGaFL4Zrzhb2V2sOhHkAOPVwaAEy";



// functions
function getEvents() {

    let scriptTag = document.createElement("script");
    let artist = (artistInput.value);
    let location = (locationInput.value);

    scriptTag.setAttribute("src", `https://app.ticketmaster.com/discovery/v2/events?apikey=${token}&keyword=${artist}&locale=*&city=${location}&callback=eventHandler`)

    document.querySelector("head").appendChild(scriptTag);
}

function eventHandler(data) {
    console.log(data);
}

function testTicket() {
    let artist = (artistInput.value);
    let location = (locationInput.value);

    let urlCurrent = `https://app.ticketmaster.com/discovery/v2/events?apikey=${token}&keyword=${artist}&locale=*&city=${location}&callback=eventHandler`

    fetch(urlCurrent).then(function(response) {
        console.log(response);
        return response.json();
    })
}

// event listeners
searchBtn.addEventListener("click", testTicket);