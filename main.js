window.addEventListener("scroll", function(e) {
    console.log("gi");
    if (window.pageYOffset >= document.getElementById("navbar").offsetTop + 1) {
        document.getElementById("navbar").classList.add("sticky")
    } else {
        document.getElementById("navbar").classList.remove("sticky");
    }
}); 

$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1000 
});