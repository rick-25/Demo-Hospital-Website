// //Fetch data from server using "GET" method
function getData() {

    var alerted = false; //For controling how many times the alert box will be shown
    
    let url = "http://localhost/app/api/single_read.php/?id=";
    let userIn = document.querySelector(".card input").value; 

    //Input field is empty
    if(userIn == "") {
        alert("Input is empty!");
        return;
    }

    //For handling name query
    if(isNaN(userIn)) {
        getAllData(userIn);
        return;
    }

    url += userIn;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var temp = JSON.parse(this.responseText);
            let json = {
                itemCount: 1,
                body: [temp]
            };

            //json data is ready
            fillRows(json);
            
        } else if (this.status == 404 && !alerted) {
            alert("Data not found!");
            alerted = true;
        } else if(this.readyState == 4 && !alerted) {
            alert("Not able to connect database");
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}



function getAllData(name) {

    let url = "http://localhost/app/api/read.php";
    
    //For handling name query
    if(typeof name != "undefined")
        url += "/?"+"name="+name;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            fillRows(json);
        } else if(this.readyState == 4) {
            alert("Not able to connect database!");
        }
        console.log(this.responseText);
    };

    xhttp.open("GET", url);
    xhttp.send();
}


function fillRows(json) {

    var count = json.itemCount; //Row count

    var root = document.querySelector('div.row-container');
    root.innerHTML = ""; //Clearing the previous fetched data

    let name = ["id", "name", "age", "email", "medical_condition", "contact"];

    for (var i = 0; i < count; i++) {
        let cur = document.createElement('div');
        cur.className = "row";

        for (var j = 0; j < name.length; j++) {
            let box = document.createElement('div');
            box.className = "child";

            box.innerHTML = json.body[i][name[j]];

            cur.appendChild(box);
        }

        root.appendChild(cur);
    }
}


document.querySelector("input").addEventListener("focus", function () {
    document.addEventListener("keypress", function name(event) {
        if(event.key == "Enter") {
            getData();
        }
    });
});