function search() {
    let input = document.querySelector("div.search_box input").value;

    //For invalid request
    if (input.length == 0)
        return;

    //open url in anpther tab
    window.open("https://www.google.com/search?q=" + input, "_blank");
}

function keypress() {
    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            search();
        }
    });
}