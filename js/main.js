// *** HUMBURGER MENU *** //
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

const dropDownBtn = document.getElementById("dropDownBtn");
const arrowIcon = document.getElementById("arrowIcon");
const dropDownMenu = document.getElementById("dropDownMenu");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  dropMenu.style.display = "none";
}

dropDownBtn.addEventListener("mouseover", changeArrowUp);

function changeArrowUp () {
  arrowIcon.classList.remove("fa-angle-down");
  arrowIcon.classList.add("fa-angle-up");
}

dropDownBtn.addEventListener("mouseleave", changeArrowDown);

function changeArrowDown () {
  arrowIcon.classList.remove("fa-angle-up");
  arrowIcon.classList.add("fa-angle-down");
}


// NAVBAR
window.addEventListener('scroll', function (){
  var nav = document.querySelector('.navbar');
    nav.classList.toggle('sticky-nav', window.scrollY > 0 );
  });
// NAV-ACTIVE FUNCTION
$('.navbar-nav a').on('click', function () {
	$('.navbar-nav').find('.nav-item.active').removeClass('active');
	$(this).parent('.nav-item').addClass('active');
});


// *** SMOOTH PAGE SCROLLING FUNCTION *** //
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {

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
      }, 850, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});

// *** MIX-IT-UP *** //
$(document).ready(function(){
  var mixer = mixitup('.mixit');
  });


// *** SCROLL TOP BUTTON *** //
var mybutton = document.getElementById("scrollTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 653 || document.documentElement.scrollTop > 653) {
    mybutton.style.display = "block";
    mybutton.style.transform = "translateY(-25px)";
  } else {
    mybutton.style.transform = "translateY(50px)";
  }
};
// When the user clicks on the button, scroll to the top of the document
function topScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// *** FORM VALIDATION ***** //
function formValidate(){
  let phone = document.getElementById('phone').value;
  let text;
  
  if(isNaN(phone)){
    text = "Phone number is not valid";
    event.preventDefault();
    }else {
      text = ""; 
      }
  document.getElementById('vld-phone').innerHTML = text;
  }

function htmlBtn(){
  var a = document.getElementById('crt-box').style.display = "block"

}
