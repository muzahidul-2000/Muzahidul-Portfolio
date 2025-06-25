const skillIcons = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'UI/UX': 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
  'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
  'Mobile UI': 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
  'UI Design': 'https://cdn-icons-png.flaticon.com/512/1828/1828970.png',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
};

const projects = [
  {
    title: "University Management System",
    description: "Java-based desktop app with MySQL backend to manage student/teacher records, attendance, and fee payments.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
    skills: ["Java", "MySQL"]
  },
  {
    title: "Crypto Dashboard",
    description: "Responsive web app in React using CoinGecko API for BTC tracking with live charts and auto-refresh.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
    skills: ["React", "API", "CSS"]
  },
  {
    title: "Flask Expense Tracker",
    description: "Expense tracking web app with Flask, HTML, CSS, MySQL, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600",
    skills: ["JavaScript", "Python", "MySQL", "Flask", "HTML", "CSS", "Pandas"]
  }
];

const container = document.getElementById("portfolio-container");
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalSkills = document.getElementById("modal-skills");
const closeModal = document.querySelector(".project-close-btn");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
  `;
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = project.image;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;

    modalSkills.innerHTML = project.skills
      .map(skill => {
        const icon = skillIcons[skill] || '';
        return `<span title="${skill}"><img src="${icon}" alt="${skill}" style="width:20px; height:20px; vertical-align:middle; margin-right:6px;" />${skill}</span>`;
      })
      .join("");
  });
  container.appendChild(card);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navItem = document.getElementById("nav-item");
  if (hamburger && navItem) {
    hamburger.addEventListener("click", function () {
      navItem.classList.toggle("active");
    });
  }
});
