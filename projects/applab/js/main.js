// Sticky Navbar
window.addEventListener('scroll', function(){
  const navBar = document.querySelector('.navbar');
  navBar.classList.toggle('sticky', window.scrollY > 700);
})

// Navlink Active Toggler
$('.navbar-nav a').on('click', function(){
  $('.navbar-nav').find('.nav-item.active').removeClass('active');
  $(this).parent('.nav-item').addClass('active');
  $('.navbar-collapse').collapse('hide');
})

// Price List Toggler
const monthlyBtn = document.getElementById('monthly_btn');
const yearlyBtn = document.getElementById('yearly_btn');
const monthlyList =  document.getElementById('monthly');
const yearlyList =  document.getElementById('yearly');

monthlyBtn.addEventListener('click', function(){
  yearlyList.style.display = "none";
  monthlyList.style.display = "flex";
  yearlyBtn.classList.remove('active');
  this.classList.add('active');
})

yearlyBtn.addEventListener('click', function(){
  monthlyList.style.display = "none";
  yearlyList.style.display = "flex";
  monthlyBtn.classList.remove('active');
  this.classList.add('active');
})

// Swiper Slider
const swiper = new Swiper('.swiper', {
  speed: 2000,
  spaceBetween: 100,  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});
  
