

  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  

//<!-- header part -->


$(function(){
  var navStatesInPixelHeight = [110,120];
    
  var changeNavState = function(nav, newStateIndex) {
    nav.data('state', newStateIndex).stop().animate({
      height : navStatesInPixelHeight[newStateIndex] + 'px'
    }, 600);    
  };
    
  var boolToStateIndex = function(bool) {
    return bool * 1;    
  };
    
  var maybeChangeNavState = function(nav, condState) {
    var navState = nav.data('state');
    if (navState === condState) {
      changeNavState(nav, boolToStateIndex(!navState));
    }
  };
    
  $('#header_nav').data('state', 1);
    
  $(window).scroll(function(){
    var $nav = $('#header_nav');
        
    if ($(document).scrollTop() > 0) {
      maybeChangeNavState($nav, 1);
    } else {
      maybeChangeNavState($nav, 0); 
    }
  });
});

//<!--photo gallery  -->

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
