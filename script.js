// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const education = document.getElementById("education");
const educationBtn = document.getElementById("education-btn");
const aboutMe = document.getElementById("about-me");
const aboutMeBtn = document.getElementById("about-me-btn");

portfolioBtn.addEventListener("click", () => {
  hideAllSections();
  portfolio.style.display = "flex";
  updateActiveButton(portfolioBtn);
});

skillsBtn.addEventListener("click", () => {
  hideAllSections();
  skills.style.display = "flex";
  updateActiveButton(skillsBtn);
});

educationBtn.addEventListener("click", () => {
  hideAllSections();
  education.style.display = "flex";
  updateActiveButton(educationBtn);
});

aboutMeBtn.addEventListener("click", () => {
  hideAllSections();
  aboutMe.style.display = "flex";
  updateActiveButton(aboutMeBtn);
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
    github: "assets/github_light.png",
    linkedin: "assets/linkedin_light.png",
    email: "assets/email_light.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    github: "assets/github_dark.png",
    linkedin: "assets/linkedin_dark.png",
    email: "assets/email_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);
    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);
    setTheme(isDark);
  };

  loadTheme();
});


function hideAllSections() {
  [portfolio, skills, education, aboutMe].forEach(section => {
    section.style.display = "none";
  });
}

// Helper function to update the active button
function updateActiveButton(activeButton) {
  const allButtons = [portfolioBtn, skillsBtn, educationBtn, aboutMeBtn];
  allButtons.forEach(button => {
    button.classList.remove("active-btn");
  });
  activeButton.classList.add("active-btn");
}

document.body.classList.add("fade-in");

function hideAllSections() {
  [portfolio, skills, education, aboutMe].forEach(section => {
    section.style.display = "none";
    section.classList.remove("slide-up");
  });
}

function updateActiveButton(activeButton) {
  const allButtons = [portfolioBtn, skillsBtn, educationBtn, aboutMeBtn];
  allButtons.forEach(button => {
    button.classList.remove("active-btn");
  });
  activeButton.classList.add("active-btn", "slide-up");
}


