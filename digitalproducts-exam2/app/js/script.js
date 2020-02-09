// Google Maps API
function initMap() {
  let position = {lat: -7.927062, lng: 112.640333};
  let center = {lat: -7.928, lng: 112.635};
  let map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 15,
      center: center,
      disableDefaultUI: true,
    });
  let marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: 'img/marker-map.png'
  });
}

// Top Menu
(function () {
  const topMenu = document.querySelector('.top-menu');

// Owl Carousel recent-works
$(function () {
  $(".recent-works-carousel").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
    '<span class="arrow-owl arrow-left"></span>',
    '<span class="arrow-owl arrow-right"></span>'
    ],
    autoplayTimeout: 4000,
    responsive:{
      0:{
        nav: false
      },
      768:{
        nav: false
      },
      1180:{
        nav: true
      }
    }
  });

// Owl Carousel meet-our-team
  $(".meet-our-team-carousel").owlCarousel({
    items: 3,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
    '<span class="arrow-owl arrow-left"></span>',
    '<span class="arrow-owl arrow-right"></span>'
    ],
    autoplayTimeout: 4000,
    responsive:{
      0:{
        items:1,
        nav: false
      },
      768:{
        items:2,
        nav: true
      },
      1180:{
        items:3,
        nav: true
      }
    }
  });
});


function toTopBtnFn(){
  const toTopBtn = document.createElement('span');

  const addBtn = () => {
   toTopBtn.classList.add('button-to-top');
   document.body.appendChild(toTopBtn);
   const toTopPosition = window.innerHeight;

   toTopBtn.addEventListener('click', () => {
    window.scrollTo({
     top: 0,
     behavior: "smooth"
   });
  })
 }

 const removeBtn = () => {
   toTopBtn.remove();
 }

 return {
   addBtn: addBtn,
   removeBtn: removeBtn
 }
}

const btnToTop = toTopBtnFn();

document.addEventListener('scroll', () => {
  if(window.pageYOffset < topMenu.clientHeight) {
   topMenu.classList.remove('fixed');
 } else {
   topMenu.classList.add('fixed');
 }

 window.pageYOffset >= window.innerHeight ? btnToTop.addBtn() : btnToTop.removeBtn();
});
})();