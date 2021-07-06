var dataType = "all"; //Possible opetion "today"
var buttonColor = "rgb(163, 212, 255)";



//alter the value of value field in key:value pair
function setValue(val1, val2, val3) {
    let nodearray = document.getElementsByClassName("value");
    nodearray[0].innerHTML = val1;
    nodearray[1].innerHTML = val2;
    nodearray[2].innerHTML = val3;
}


updateCovidData();

function updateCovidData() {
    
    let url = "https://corona.lmao.ninja/v2/countries/india?yesterday=true&strict=true&query%20=india";

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);

            //Collect recived data as per dataType variable
            let cases, recovered, deaths;

            if(dataType === "all") {
                cases = json.cases;
                recovered = json.recovered;
                deaths = json.deaths;
            }
            else {
                cases = json.todayCases;
                recovered = json.todayRecovered;
                deaths = json.todayDeaths;
            }

            
            setValue(cases, recovered, deaths);

        } else if (this.readyState == 4) {
            alert("Not able to connect database!");
        }
    };

    xhttp.open("GET", url);
    xhttp.send();

}




function todaydata(callingobj) {

    if(dataType === "today")
        return;
    
    decolor();
    callingobj.style.backgroundColor = buttonColor;
    
    dataType = "today";
    setValue("Loading..", "Loading..", "Loading..");
    updateCovidData();
}
function alldata(callingobj) {

    if(dataType === "all")   
        return;
    
    decolor();
    callingobj.style.backgroundColor = buttonColor;
    
    dataType = "all";
    setValue("Loading..", "Loading..", "Loading..");
    updateCovidData();
}




//Changes the color of both buttons to white
function decolor() {
    let buttonContainer = document.getElementsByClassName("buttons")[0];
    buttonContainer.children[0].style.backgroundColor = "white";
    buttonContainer.children[1].style.backgroundColor = "white";
}


















// JSON format
// {
//     "updated": 1625505242209,
//     "country": "India",
//     "countryInfo": {
//         "_id": 356,
//         "iso2": "IN",
//         "iso3": "IND",
//         "lat": 20,
//         "long": 77,
//         "flag": "https://disease.sh/assets/img/flags/in.png"
//     },
//     "cases": 30584872,
//     "todayCases": 40387,
//     "deaths": 402758,
//     "todayDeaths": 743,
//     "recovered": 29692986,
//     "todayRecovered": 42817,
//     "active": 489128,
//     "critical": 8944,
//     "casesPerOneMillion": 21946,
//     "deathsPerOneMillion": 289,
//     "tests": 418254953,
//     "testsPerOneMillion": 300116,
//     "population": 1393642378,
//     "continent": "Asia",
//     "oneCasePerPeople": 46,
//     "oneDeathPerPeople": 3460,
//     "oneTestPerPeople": 3,
//     "undefined": 351,
//     "activePerOneMillion": 350.97,
//     "recoveredPerOneMillion": 21306.03,
//     "criticalPerOneMillion": 6.42
// }