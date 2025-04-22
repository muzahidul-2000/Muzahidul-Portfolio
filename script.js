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


const skillIcons = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'UI/UX': 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
  'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
  'Mobile UI': 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
  'UI Design': 'https://cdn-icons-png.flaticon.com/512/1828/1828970.png',
};
const projects = [
  {
    category: 'web-development',
    title: 'Beauty Center Website',
    image: 'https://picsum.photos/id/1015/1200/800',
    fullImage: 'https://picsum.photos/id/1015/1200/800',
    description: 'My first web development project — a responsive and elegant website for a beauty center — showcases a clean layout tailored for skincare and facial treatment services. Recently enhanced with UI improvements and functional updates, the website is built using HTML, CSS, and JavaScript, focusing on smooth user experience and mobile responsiveness.',
    skills: ['React', 'Node.js', 'Express'],
    link: 'https://live-site-link.com'
  },

  {
    category: 'web-development',
    title: 'Cafe Crust',
    image: 'https://picsum.photos/id/1020/600/400',
    fullImage: 'https://picsum.photos/id/1020/1200/800',
    description: 'Café Crust is a sleek and interactive website I recently developed for a fictional café using React.js. This project highlights modular design principles and leverages dynamic rendering through arrays to showcase menu items and bakery products. With a focus on modern UI/UX, the site delivers a smooth browsing experience, reflecting both aesthetic appeal and functional responsiveness.',
    skills: ['JavaScript', 'API', 'HTML', 'CSS'],
    link: 'https://weather-app.com'
  },
  {
    category: 'web-development',
    title: 'Digital Technology Website',
    image: 'https://picsum.photos/id/1042/600/400',
    fullImage: 'https://picsum.photos/id/1042/1200/800',
    description: 'Designed and developed a dynamic website for a Digital Technology Agency, focusing on a clean, modern design with a structured layout. The website showcases key information in a user-friendly manner, reflecting the agency’s professionalism and brand identity. With a focus on simplicity and impact, the design ensures easy navigation while maintaining a sleek and professional aesthetic. This project highlights my ability to create effective, responsive websites tailored to client needs.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://portfolio-site.com'
  },
  {
    category: 'web-design',
    title: 'Digital Technology Agency',
    image: 'https://loremflickr.com/600/400/website,design',
    fullImage: 'https://loremflickr.com/1200/800/website,design',
    description: 'This project focuses on delivering a clean design and structured layout to highlight essential information effectively. its a simple yet impactful design that reflects professsionalism.Looking forward to your feedbackand suggestions!',
    skills: ['Figma', 'UI/UX'],
    link: 'https://design-link.com'
  },
  {
    category: 'web-design',
    title: 'Cafe Crust',
    image: 'https://loremflickr.com/600/400/mobile,app',
    fullImage: 'https://loremflickr.com/1200/800/mobile,app',
    description: 'I recently built this sleek and interactive website for a fictinal cafe crust using react.js.This project emphasizes modularity and modern design while utilizing arrays to dynamically generate cards for menu items and bakery products.',
    skills: ['Adobe XD', 'Mobile UI'],
    link: 'https://design-link.com'
  },
  

  {
    category: 'web-design',
    title: 'Creative Agency Homepage',
    image: 'https://loremflickr.com/600/400/agency,homepage',
    fullImage: 'https://loremflickr.com/1200/800/agency,homepage',
    description: 'Designed a visually striking homepage for a digital creative agency to reflect their brand identity. The design included layered illustrations, gradient overlays, interactive sliders, and consistent design tokens to maintain brand consistency across all components and devices.',
    skills: ['Figma', 'Adobe XD'],
    link: 'https://agency-home.com'
  },

];



// Function to resolve local image paths if they are not full URLs
function resolveImagePath(imagePath) {
  return imagePath.startsWith('http') ? imagePath : '/assets/projects' + imagePath;
}

const projectGrid = document.getElementById('projectGrid');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupSkills = document.getElementById('popup-skills');
const popupLink = document.getElementById('popup-link');
const popupClose = document.getElementById('popup-close');
const popupImgLink = document.getElementById('popup-img-link');

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${resolveImagePath(project.image)}" alt="${project.title}">
      <h3>${project.title}</h3>
    `;
    card.addEventListener('click', () => openPopup(project));
    projectGrid.appendChild(card);
  });
}

function openPopup(project) {
  popupImg.src = project.fullImage;
  popupTitle.textContent = project.title;
  popupDescription.textContent = project.description;
  popupSkills.innerHTML = '';

  project.skills.forEach(skill => {
    const img = document.createElement('img');
    img.src = skillIcons[skill] || 'https://via.placeholder.com/40'; // fallback
    img.alt = skill;
    img.title = skill;
    img.className = 'skill-icon';
    popupSkills.appendChild(img);
  });

  popupLink.href = project.link;
  popup.classList.remove('hidden');
}

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Filter Buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    renderProjects(btn.dataset.filter);
  });
});

renderProjects(); // initial load

document.querySelector(".hamburger").addEventListener("click", () => {
  const navItem = document.querySelector("#nav-item");
  navItem.classList.toggle("active");
});
renderProjects(); // initial load
