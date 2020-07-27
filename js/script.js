// responsive navbar script
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//scroll to element
$('ul.nav a').bind('click', function (event) {
    event.preventDefault();
    var $anchor = $(this);
    console.log($anchor.attr('href'))
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
    event.preventDefault();
});