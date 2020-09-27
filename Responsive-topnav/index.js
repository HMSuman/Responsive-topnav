function myFunction() {
    var x = document.querySelector(".icon");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}