// Initialize Swiper with cube effect
const swiper = new Swiper('.swiper-container', {
  effect: 'cube', // Use cube effect
  grabCursor: true,
  cubeEffect: {
    shadow: true, // Enable shadow
    slideShadows: true, // Enable slide shadows
    shadowOffset: 20, // Shadow offset
    shadowScale: 0.94, // Shadow scale
  },
  pagination: {
    el: '.swiper-pagination', // Enable pagination (optional)
  },
  navigation: {
    nextEl: '.swiper-button-next', // Optional next button
    prevEl: '.swiper-button-prev', // Optional previous button
  },
});

// Event listener for the "Learn More" button of the Web Developer card
document.getElementById('btn1').addEventListener('click', function () {
  swiper.slideTo(1); // Go to Web Developer slide
});

// Event listener for the "Learn More" button of the Web Designer card
document.getElementById('btn2').addEventListener('click', function () {
  swiper.slideTo(2); // Go to Web Designer slide
});

// Event listener for the top circular profile image (left center)
document.getElementById('profileImageTrigger').addEventListener('click', function () {
  swiper.slideTo(0); // Go to intro/about slide
});