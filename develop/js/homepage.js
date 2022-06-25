
// static selectors
let artistInput = document.querySelector("#artist-input");
let genreInput = document.querySelector("#genre-input");
let locationInput = document.querySelector("#location-input");
let searchBtn = document.querySelector("#searchButton");

let searchContainerEl = document.querySelector("#search-result");
let eventContainerEl = document.querySelector("#event-container");

const token = "a8yMuGaFL4Zrzhb2V2sOhHkAOPVwaAEy";

let date1 = document.getElementById("event1");
let date2 = document.getElementById("event2");
let date3 = document.getElementById("event3");
let date4 = document.getElementById("event4");
let date5 = document.getElementById("event5");

let time1 = document.getElementById("time1");
let time2 = document.getElementById("time2");
let time3 = document.getElementById("time3");
let time4 = document.getElementById("time4");
let time5 = document.getElementById("time5");

let infoArray = [];
let storageList = document.querySelector("#storage-list");


const API_KEY = "438460-OwenNewl-STJHC920"
var firstArtist = document.getElementById("artist1")
var secondArtist = document.getElementById("artist2")
var thirdArtist = document.getElementById("artist3")
var fourthArtist = document.getElementById("artist4")
var fifthArtist = document.getElementById("artist5")
var sixthArtist = document.getElementById("artist6")
var seventhArtist = document.getElementById("artist7")
var eigthArtist = document.getElementById("artist8")
var ninthArtist = document.getElementById("artist9")
var tenthArtist = document.getElementById("artist10")
var artistList = document.getElementById("artistList")


// functions

function getSimilarArtists(artist) {
    let scriptTag = document.createElement('script');
    let queryString = artist
    scriptTag.setAttribute('src', `https://tastedive.com/api/similar?k=${API_KEY}&q=${queryString}&callback=myFunction`)
    document.querySelector('head').appendChild(scriptTag)

}


function myFunction(data) {
    //code to handle incoming data from API call
    console.log(data)
    firstArtist.innerHTML = "1:    "  + data.Similar.Results[0].Name
    secondArtist.innerHTML = "2:    "  + data.Similar.Results[1].Name
    thirdArtist.innerHTML = "3:    "  + data.Similar.Results[2].Name
    fourthArtist.innerHTML = "4:    "  + data.Similar.Results[3].Name
    fifthArtist.innerHTML = "5:    "  + data.Similar.Results[4].Name
    sixthArtist.innerHTML = "6:    "  + data.Similar.Results[5].Name
    seventhArtist.innerHTML = "7:    "  + data.Similar.Results[6].Name
    eigthArtist.innerHTML = "8:    "  + data.Similar.Results[7].Name
    ninthArtist.innerHTML = "9:    "  + data.Similar.Results[8].Name
    tenthArtist.innerHTML = "10:    "  + data.Similar.Results[9].Name

    


}


function testTicket() {
    let artist = encodeURI(artistInput.value);
    let location = encodeURI(locationInput.value);

    displayCurrentArtist(artist, location);


}

function handleStorage() {
    infoArray.push({
        artist: artistInput.value,
        location: locationInput.value
    })
    artistInput.value = ""
    locationInput.value = ""
    localStorage.setItem("info", JSON.stringify(infoArray))
    displayStorage()
}

function displayStorage() {
    let info = JSON.parse(localStorage.getItem("info"))

    if (info) {
        infoArray = info;
    }

    storageList.textContent = "";
    for (let i = 0; i < infoArray.length; i++) {
        let li = document.createElement("li")
        li.textContent = infoArray[i].artist
        li.classList.add("storage-list-item")
        storageList.appendChild(li);
    }

    let listItems = document.querySelectorAll(".storage-list-item")

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener("click", function(event) {
            displayCurrentArtist(event.target.textContent, "")
        })        
    }
}

function displayCurrentArtist(artist, location) {
    let urlCurrent = `https://app.ticketmaster.com/discovery/v2/events?apikey=${token}&keyword=${artist}&locale=*&city=${location}`

    fetch(urlCurrent).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function (data) {
        console.log(data);




        let currentDate = data._embedded.events[0].dates.start.localDate;
        let currentTime = data._embedded.events[0].dates.start.localTime;

        let currentDate2 = data._embedded.events[1].dates.start.localDate;
        let currentTime2 = data._embedded.events[1].dates.start.localTime;

        let currentDate3 = data._embedded.events[2].dates.start.localDate;
        let currentTime3 = data._embedded.events[2].dates.start.localTime;

        let currentDate4 = data._embedded.events[3].dates.start.localDate;
        let currentTime4 = data._embedded.events[3].dates.start.localTime;

        let currentDate5 = data._embedded.events[4].dates.start.localDate;
        let currentTime5 = data._embedded.events[4].dates.start.localTime;

        date1.innerHTML = currentDate
        date2.innerHTML = currentDate2
        date3.innerHTML = currentDate3
        date4.innerHTML = currentDate4
        date5.innerHTML = currentDate5
        time1.innerHTML = currentTime
        time2.innerHTML = currentTime2
        time3.innerHTML = currentTime3
        time4.innerHTML = currentTime4
        time5.innerHTML = currentTime5

        let e1 = document.getElementById("e1")
        let e2 = document.getElementById("e2")
        let e3 = document.getElementById("e3")
        let e4 = document.getElementById("e4")
        let e5 = document.getElementById("e5")


        e1.setAttribute("href", data._embedded.events[0].url)
        e2.setAttribute("href", data._embedded.events[1].url)
        e3.setAttribute("href", data._embedded.events[2].url)
        e4.setAttribute("href", data._embedded.events[3].url)
        e5.setAttribute("href", data._embedded.events[4].url)

        handleStorage();
        getSimilarArtists(artist)
    })
}


displayStorage()
// event listeners


searchBtn.addEventListener("click", function () {
    testTicket();
    getSimilarArtists();
    artistList.classList.add("list-decimal") 
    
})

