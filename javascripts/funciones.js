/* funciones javascript para la Landing page de Sistemas Informáticos */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

/**** para que el scroll se ejecute de manera suave y progresiva */
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//SLIDESHOW 1****************************

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

//SLIDESHOW 2****************************

var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

// Thumbnail image controls
function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1}
  if (m < 1) {slideIndex2 = slides2.length}
  for (j = 0; j< slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}


//SLIDESHOW 3****************************

var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(s) {
  showSlides3(slideIndex3 += s);
}

// Thumbnail image controls
function currentSlide3(s) {
  showSlides3(slideIndex3 = s);
}

function showSlides3(s) {
  var y;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (s > slides3.length) {slideIndex3 = 1}
  if (s < 1) {slideIndex3 = slides3.length}
  for (y= 0; y < slides3.length; y++) {
      slides3[y].style.display = "none";
  }
  for (y = 0; y < dots3.length; y++) {
      dots3[y].className = dots3[y].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

//SLIDESHOW 4****************************
var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(x) {
  showSlides4(slideIndex4 += x);
}

// Thumbnail image controls
function currentSlide4(x) {
  showSlides4(slideIndex4 = x);
}

function showSlides4(x) {
  var t;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("dot4");
  if (x > slides4.length) {slideIndex4 = 1}
  if (x < 1) {slideIndex4 = slides4.length}
  for (t = 0; t < slides4.length; t++) {
      slides4[t].style.display = "none";
  }
  for (t = 0; t < dots4.length; t++) {
      dots4[t].className = dots4[t].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
} 