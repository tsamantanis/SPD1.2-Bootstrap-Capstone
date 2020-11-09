window.addEventListener("scroll", function(e) {
    console.log("gi");
    if (window.pageYOffset >= document.getElementById("navbar").offsetTop + 1) {
        document.getElementById("navbar").classList.add("sticky")
    } else {
        document.getElementById("navbar").classList.remove("sticky");
    }
}); 
