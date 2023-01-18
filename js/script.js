var apiKey = "&apikey=62e41f5e9a714311aa8c7649f9114182"

var website = "https://newsapi.org/v2/"
var endpoint = "everything?"
var request = website + endpoint + apiKey

function get_request() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if( this.readystate == 4 && this.status == 200 ) {
            var elements = document.getElementsByClassName("content")
            for(var i = 0; i < elements.length; i++){
                elements.innerHTML = xhttp.responseText
            }
        }
    }
    xhttp.open("GET", request, true)
    xhttp.send();
}