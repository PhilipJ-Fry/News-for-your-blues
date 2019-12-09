
// side nav menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/// Activate Carousel
$('.carousel').carousel({
interval: 2000
})

// Enable Carousel Indicators
$(".item").click(function(){
  $("#featured-articles").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
  $("#featured-articles").carousel("prev");
});
