var apiKey = "62e41f5e9a714311aa8c7649f9114182"

var request = ""

function get_request() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if( this.readystate == 4 && this.status == 200 ) {
            
        }
    }
    xhttp.open("GET", request, true)
    xhttp.send();
}