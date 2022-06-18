// ADD PSUEDO CODE

// form element selectors
let searchForm = document.querySelector("#search-form");
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");

let mapContainerEl = document.querySelector("#map-container"); 

function generateMap(event) {
    event.preventDefault();
}

searchForm.addEventListener("submit", generateMap);