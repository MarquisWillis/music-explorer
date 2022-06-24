// ADD PSUEDO CODE

// static selectors
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");
let searchBtn = document.querySelector("#search-btn");

let genreCardEl = document.querySelectorAll(".genreCard");

let searchContainerEl = document.querySelector("#search-result");
let additionalContainerEl = document.querySelector("#additional-container");
const token = "262416fb5ae704423";

// functions
function generateSearchResults() {
    let artist = artistInput.value;
    let genre = genreInput.value;
    let location = locationInput.value;

    let urlCurrent = `https://www.googleapis.com/customsearch/v1?${token}`;
    fetch(urlCurrent)
        .then(function (response) {
            console.log(response);
            return response.json();
        }) 
}
// event listeners
searchBtn.addEventListener("submit", generateSearchResults);
