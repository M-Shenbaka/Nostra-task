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


// Check box functionality

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll('.product__image');


checkboxes.forEach( checkbox =>
{
  checkbox.addEventListener("change",() =>
  {
     const selected_occasion = get_checked_values("occasion")
     const selected_color = get_checked_values("color")
     const selected_arrival = get_checked_values("arrival")

     products.forEach( product =>
     {
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;
        const arrival = product.dataset.arrival;

        const match_Occasion = selected_occasion.length === 0 || selected_occasion.includes(occasion);
        const match_Color = selected_color.length === 0 || selected_color.includes(color);
        const match_Arrival = selected_arrival.length === 0 || selected_arrival.includes(arrival);

        if (match_Occasion && match_Color && match_Arrival) 
        {
            product.style.display = "block";
        } else 
        {
            product.style.display = "none";
        }
     })
  })
})

function get_checked_values(type)
{
  return Array.from(checkboxes).filter( chk_box =>
    chk_box.checked && chk_box.dataset.type === type
  ).map(chk_box => chk_box.value)
}


// Search Bar Functionality

var productcontainer = document.getElementById("product_container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"

        }
        else {
            productlist[count].style.display = "block"
        }
    }
})