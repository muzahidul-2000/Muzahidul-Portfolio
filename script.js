

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

document.getElementById("contactForm").addEventListener("submit", function (e) {
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
    title: "University Management System",
    description: "The University Management System is a Java-based desktop app with MySQL backend to manage student/teacher records, attendance, exams, and fee payments. Built with Java 11, it uses mysql-connector-java-8.0.27.jar and rs2xml.jar. To run, set up the database using the provided SQL file, start the MySQL server, and launch Login.java (Username: admin, Password: admin).",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    skills: ["Java", "MySQL"]
  },
  {
    title: "Crypto Dashboard",
    description: "A real-time crypto price tracker dashboard built using CoinGecko API and Chart.js.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    skills: ["React", "Chart.js", "API", "Tailwind"]
  },
  {
    title: "Cafe Website",
    description: "A responsive landing page for a fictional café built with React and Swiper.js.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    skills: ["React", "CSS", "Swiper.js"]
  },
  {
    title: "Portfolio Site",
    description: "A personal portfolio website showcasing my projects, resume, and contact info.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

const container = document.getElementById("portfolio-container");
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalSkills = document.getElementById("modal-skills");
const closeModal = document.querySelector(".close");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
  `;
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = project.image;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;
    modalSkills.innerHTML = project.skills
      .map((skill) => `<span>${skill}</span>`)
      .join("");
  });
  container.appendChild(card);
});

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};
