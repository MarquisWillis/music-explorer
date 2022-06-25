
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


// functions

function testTicket() {
    let artist = encodeURI(artistInput.value);
    let location = encodeURI(locationInput.value);

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


    })


}

// event listeners
searchBtn.addEventListener("click", testTicket);

