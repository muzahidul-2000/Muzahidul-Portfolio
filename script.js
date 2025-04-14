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
    title: 'E-commerce Website',
    image: 'https://picsum.photos/id/1015/600/400',
    fullImage: 'https://picsum.photos/id/1015/1200/800',
    description: 'A fully functional e-commerce platform built using React for the frontend and Node.js with Express for the backend. It features a dynamic product catalog, secure authentication, shopping cart functionality, order tracking, and an intuitive admin dashboard for inventory management.',
    skills: ['React', 'Node.js', 'Express'],
    link: 'https://live-site-link.com'
  },
  {
    category: 'web-development',
    title: 'Weather App',
    image: 'https://picsum.photos/id/1020/600/400',
    fullImage: 'https://picsum.photos/id/1020/1200/800',
    description: 'A responsive weather application that fetches real-time weather data using a third-party API. Users can search for any city to get current conditions, a five-day forecast, temperature trends, and other climate insights, all displayed with dynamic icons and charts.',
    skills: ['JavaScript', 'API', 'HTML', 'CSS'],
    link: 'https://weather-app.com'
  },
  {
    category: 'web-design',
    title: 'Landing Page Redesign',
    image: 'https://loremflickr.com/600/400/website,design',
    fullImage: 'https://loremflickr.com/1200/800/website,design',
    description: 'Redesigned the landing page of a SaaS platform to enhance user engagement and reduce bounce rates. The layout was restructured for better readability, faster loading, and visually appealing call-to-actions, based on modern UI/UX principles and A/B testing results.',
    skills: ['Figma', 'UI/UX'],
    link: 'https://design-link.com'
  },
  {
    category: 'web-design',
    title: 'Mobile App UI',
    image: 'https://loremflickr.com/600/400/mobile,app',
    fullImage: 'https://loremflickr.com/1200/800/mobile,app',
    description: 'Designed an intuitive and minimal mobile application interface for a task management tool. The UI focuses on usability and accessibility, featuring a clean layout, clear typography, gesture-based navigation, and customizable color themes suitable for both iOS and Android platforms.',
    skills: ['Adobe XD', 'Mobile UI'],
    link: 'https://design-link.com'
  },
  {
    category: 'web-development',
    title: 'Portfolio Website',
    image: 'https://picsum.photos/id/1042/600/400',
    fullImage: 'https://picsum.photos/id/1042/1200/800',
    description: 'A personal portfolio website showcasing projects, skills, and resume with interactive animations and scroll-triggered transitions. Built with HTML, CSS, and JavaScript, it includes smooth navigation, contact form integration, and optimized performance for mobile and desktop.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://portfolio-site.com'
  },
  {
    category: 'web-development',
    title: 'Blog CMS',
    image: 'https://picsum.photos/id/1060/600/400',
    fullImage: 'https://picsum.photos/id/1060/1200/800',
    description: 'Developed a custom blog content management system from scratch using PHP and MySQL. The platform includes user authentication, rich text editing, comment moderation, post scheduling, and a mobile-first admin dashboard for bloggers to manage and publish content with ease.',
    skills: ['PHP', 'MySQL', 'Bootstrap'],
    link: 'https://blogcms.com'
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
  {
    category: 'web-design',
    title: 'Travel App UI Concept',
    image: 'https://loremflickr.com/600/400/travel,app',
    fullImage: 'https://loremflickr.com/1200/800/travel,app',
    description: 'Crafted a concept UI for a travel booking app that enables users to search destinations, book hotels, and explore trip packages with ease. The design emphasizes vibrant imagery, intuitive navigation, and modular components to support scalability and future features.',
    skills: ['Sketch', 'UI Design'],
    link: 'https://travel-app-ui.com'
  }
];



const projectGrid = document.getElementById('projectGrid');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupSkills = document.getElementById('popup-skills');
const popupLink = document.getElementById('popup-link');
const popupClose = document.getElementById('popup-close');

function renderProjects(filter = 'all') {
    projectGrid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            
        `;
        card.addEventListener('click', () => openPopup(project));
        projectGrid.appendChild(card);
    });
}
{/* <p>${project.description}</p> */}
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

