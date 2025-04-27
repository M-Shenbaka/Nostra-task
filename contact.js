// Offer bar

var offerbar = document.getElementById("offer-bar")
var offerclose = document.getElementById("offer-close")
offerclose.addEventListener("click", function () {
    offerbar.style.display = "none"
  })

//side nav bar
var sidenavopen = document.getElementById("sidenav__open")
var sidenav = document.querySelector(".sidenav")
var sidenavclose = document.getElementById("sidenav__close")

sidenavopen.addEventListener("click", function () 
{
  sidenav.style.marginLeft = "0px";
})

sidenavclose.addEventListener("click", function () 
{
  sidenav.style.marginLeft = "-70%";
})