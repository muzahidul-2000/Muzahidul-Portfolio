
const container = document.getElementById("portfolio-container");
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalgithub = document.getElementById("modal-github");
const modalSkills = document.getElementById("modal-skills");
const closeModal = document.querySelector(".project-close-btn");
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const contactCloseBtn = document.querySelector(".contact-close-btn");



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
  'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
  'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  
  'API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
};


const projects = [
  {
    title: "University Management System",
    description: "Java-based desktop app with MySQL backend to manage student/teacher records, attendance, and fee payments.",
    image: "https://images.unsplash.com/photo-1696041761374-6cfa63afe0b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skills: ["Java", "MySQL"],
    github: "https://github.com/muzahidul-2000/UniversityManagement",
  },
  {
    title: "Crypto Dashboard",
    description: "Responsive web app in React using CoinGecko API for BTC tracking with live charts and auto-refresh.",
    image: "https://media.istockphoto.com/id/1307254034/photo/decentralized-cryptocurrency-bitcoin-growing-up-financial-banking-and-crypto-currency-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=Oom34R3tl2P8qRkW6JbXUXaFZ9H6ekayOL6kf4e7WjI=",
    skills: ["React", "API", "CSS"],
    github: "https://github.com/muzahidul-2000/Crypto_React_App",
  },
  {
    title: "Flask Expense Tracker",
    description: "Expense tracking web app with Flask, HTML, CSS, MySQL, and advanced analytics.",
    image: "https://media.istockphoto.com/id/1498123628/photo/golden-financial-chart-stacks-of-gold-coins-on-dark-navy-floor-with-a-grid-pattern.webp?a=1&b=1&s=612x612&w=0&k=20&c=WweRG_y8eI3cWHdXZk6D7_tOk_BHrXqjAbct7dLlmiM=",
    skills: ["JavaScript", "Python", "MySQL", "Flask", "HTML", "CSS", "Pandas"],
    github: "https://github.com/muzahidul-2000/Flask_Expense_App-main",
  }
];


contactBtn.addEventListener("click", () => {
  contactModal.classList.add("show");
});

contactCloseBtn.addEventListener("click", () => {
  contactModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("show");
  }
});

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

    // Fix for GitHub link
    modalgithub.href = project.github || "#";
    modalgithub.style.display = project.github ? "inline-block" : "none";

    // Skills
    modalSkills.innerHTML = project.skills
      .map(skill => {
        const icon = skillIcons[skill] || '';
        return `<span title="${skill}">
        <img src="${icon}" alt="${skill}" style="width:20px; height:20px; vertical-align:middle; margin-right:6px;" />
        ${skill}
      </span>`;
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
