// ADD PSUEDO CODE

// static homepage selectors

// form element selectors
let searchForm = document.querySelector("#search-form");
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");

// genre card selectors
let genreContainerEl = document.querySelector(".genre-card"); 


// form function
/*
    - retrieve values from inputs in the form element
    - save values in local storage

*/
function saveInput(event) {

    event.preventDefault();

    let artist = artistInput.value;
    let genre = genreInput.value;
    let location = locationInput.value;



    localStorage.setItem("artist", artist);
    localStorage.setItem("genre", genre);
    localStorage.setItem("location", location);

    console.log("artist: ", artist)
    console.log("genre: ", genre)
    console.log("location: ", location)
    displaySearchPage();

}

// genre card function (similar to generateResults)
 function genreSearch(event) {

    let genre = event.target.textContent.trim();
    
    localStorage.setItem("genre", genre);
    console.log("genre: ", genre);
    displaySearchPage();
 }

 // redirects homepage to search page
 function displaySearchPage() {
    let origin = location.origin;
    origin.replace("./search-page.html");
 }

 // add event handlers for search form and genre cards respectively
searchForm.addEventListener("submit", saveInput);
// genreContainerEl.onclick = function() {genreSearch()};