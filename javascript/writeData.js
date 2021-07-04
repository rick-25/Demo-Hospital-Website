function collectData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var medical_condition = document.getElementById("medical_condition").value;
    var contact = document.getElementById("contact").value;

    if(name == '' || age == '' || email == '' || medical_condition == '' || contact == '') {
        alert("Incomplete information!");
        return;
    }

    let json = new Object();
    json.name = name;
    json.age = age;
    json.email = email;
    json.medical_condition = medical_condition;
    json.contact = contact;

    sendData(json);
}

function sendData(json) {

    let url = "http://localhost/app/api/create.php";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
        else if(this.readyState == 4)
            alert("Error!\nNot able to connect database");
    };

    xhttp.open("POST", url, true);
    xhttp.send(JSON.stringify(json));
}