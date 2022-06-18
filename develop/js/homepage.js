// ADD PSUEDO CODE

// static homepage selectors

// form element selectors
let searchForm = document.querySelector("#search-form");
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");

let genreContainerEl = document.querySelector("#genre-container"); // TBD on whether or not to use this element or individuals

// let eventLocationURL = `https://serpapi.com/search.json?engine=google_events&q=Events+in+${locationInput.value}+${artistInput.value}`;

// let eventGenreURL = `https://serpapi.com/search.json?engine=google_events&q=Events+in+${locationInput.value}+${artistInput.value}`

function generateResults(event) {
    event.preventDefault();
}

searchForm.addEventListener("submit", generateResults);