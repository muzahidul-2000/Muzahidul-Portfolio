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

// Using your existing JavaScript as it already handles the modal functionality well
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop default browser submission

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("✅ Thank you! Your message was sent successfully.");
      document.getElementById("contactModal").style.display = "none";
      form.reset();
    } else {
      alert("❌ Submission failed. Please try again.");
    }
  })
  .catch(err => {
    alert("⚠️ Something went wrong. Check your internet connection.");
  });
});