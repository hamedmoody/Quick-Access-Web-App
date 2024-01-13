var myVar = setInterval(function() {myTimer()}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementsByClassName("box-Right")[0].innerHTML = d.toLocaleTimeString();
}