
var searchButton = document.getElementById("searchButton")
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

function getSimilarArtists() {
    let scriptTag = document.createElement('script');
    let queryString = document.querySelector('#artist-input').value 
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

searchButton.addEventListener("click", function () {

    getSimilarArtists();
    artistList.classList.add("list-decimal") 

})
