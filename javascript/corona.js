let url = "https://corona.lmao.ninja/v2/countries/india?yesterday=true&strict=true&query%20=india";
    


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        console.log(json);
    } else if(this.readyState == 4) {
        alert("Not able to connect database!");
    }
    console.log(this.responseText);
};

xhttp.open("GET", url);
xhttp.send();


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