var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 20) {
    greeting = 'make sure you go to bed early on a school night!';
} else if (hourNow > 11) {
    greeting = 'music heals the soul';
} else if (hourNow > 4) {
    greeting = 'music is the language of all';
} else {
    greeting = 'you are still up?!';
}

document.write('<h3>' + greeting + '</h3>');


