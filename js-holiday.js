var today = new Date();
var m = today.getMonth()+1
var d = today.getDate ();
var greeting;
var date;
date = m + '/' + d


if (today = 3'/'8) {
    greeting = 'happy international women day!';
} else if (today = 12'/'25) {
    greeting = 'merry christmas!';
} else if (today = 11'/'24) {
    greeting = 'happy thanksgiving!';
} else {
    greeting = 'be kind';
}

document.write('<h3>' + greeting + '</h3>');