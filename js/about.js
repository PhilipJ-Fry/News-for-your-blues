// Side navigation
function openNav() {
  if ($(window).width() < 600) {
    document.getElementById("mySidenav").style.width = "100vw";
  }
  else {
    document.getElementById("mySidenav").style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
