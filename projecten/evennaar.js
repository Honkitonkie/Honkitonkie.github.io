var myIndex = 0;
var mijn = 0;
var innex = 0;
var verandert = 0;

carousel();


function carousel() {
    var i;

    var o = document.getElementsByTagName("img");



    for (i = 0; i < o.length; i++) {
        o[i].style.display = "none";

        myIndex++;
        if (myIndex > o.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel(), 5000); // Change image every 2 seconds



    }