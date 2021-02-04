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
showSlides(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides(slideIndex1 = n);
}

function showSlides(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i1 < slides.length; i1++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
      dots[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}

//SLIDESHOW 2****************************

var slideIndex2 = 1;
showSlides(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides(slideIndex2 = n);
}

function showSlides(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}


//SLIDESHOW 3****************************

var slideIndex3 = 1;
showSlides(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides(slideIndex3 = n);
}

function showSlides(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}

//SLIDESHOW 4****************************
var slideIndex4 = 1;
showSlides(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
  showSlides(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
  showSlides(slideIndex4 = n);
}

function showSlides(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots4.length; i++) {
      dots4[i].className = dots4[i].className.replace(" active", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += " active";
} 