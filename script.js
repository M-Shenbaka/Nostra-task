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


//Slider

var slider_left =document.getElementById("slider_left_click")
var slider_right =document.getElementById("slider_right_click")
var slider_images = document.querySelector(".slider_image_container")
var total_slides = document.querySelectorAll(".slider_image").length
let index = 0;



slider_left.addEventListener("click",() =>
    {
        index = (index - 1 + total_slides) % total_slides;
        updateSlide()
    })

slider_right.addEventListener("click",() =>
    {
        index = (index + 1) % total_slides;
        updateSlide()
    })


function updateSlide() {
    slider_images.style.transform = `translateX(-${index * 100}vw)`;
  }


  // Like Button

const likebuttons = document.querySelectorAll(".likebutton");

likebuttons.forEach(function (btn) 
{
  btn.addEventListener("click", function () 
  {
    if (btn.src.includes("blackheart.png")) 
    {
      btn.src = "./images/red_heart.png";
    } 
    else 
    {
      btn.src = "./images/blackheart.png";
    }
  })
})