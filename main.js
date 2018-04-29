var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

// /* Looping through images */
var images = 5 ;
function createThumbBar() {
   for ( var i= 1; i < images+ 1; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'pic' + i + '.jpg');
    thumbBar.appendChild(newImage);
            };
     };
createThumbBar();

thumbBar.onclick=  function(e){
    var imgSrc= e.target.getAttribute('src');
    displayedImage.setAttribute('src', imgSrc);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
  var btnClass= btn.getAttribute("class");
if (btnClass == "dark") {
  btn.setAttribute("class","light");
  btn.textContent = "Lighten";
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
  btn.setAttribute("class", "dark");
  btn.textContent = "Darken";
  overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
} )