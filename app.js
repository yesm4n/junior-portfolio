"use strict";

// VARIABLES

// NAVBAR
const toggleButton = document.querySelector(".toggle-button");
const listStyles = document.querySelector(".list-styles");
const listItem = document.querySelectorAll(".list-styles li a");
const openMenu = document.querySelector(".open");
// BUTTONS
const logo = document.querySelectorAll(".logo");
const introButton = document.querySelector(".intro-button");
const contactButton = document.querySelectorAll(".contact");
const portfolioButton = document.querySelectorAll(".portfolio");
// PROJECTS
const todo = document.querySelectorAll(".todo");
const bookmarkProject = document.querySelectorAll(".bookmark");
const eCommerce = document.querySelectorAll(".e-commerce");
const roomLayout = document.querySelectorAll(".room-layout");
// FORM AND INPUT
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("myName");
const emailInput = document.getElementById("myEmail");
const textAreaInput = document.getElementById("myTextarea");
const formButton = document.getElementById("form-button");

// Hamburger menu toggle
toggleButton.addEventListener("click", () => {
  listStyles.classList.toggle("active");
  listItem.forEach((item) => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      openMenu.src = "images/icons/close.svg";
    } else {
      openMenu.src = "images/icons/hamburger.svg";
    }
  });
});

// Page scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove('show');
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));

// Scrolling to about me
const sectionAboutMe = document.querySelector(".hero-content");

if (introButton !== null) {
  introButton.addEventListener("click", (e) => {
    sectionAboutMe.scrollIntoView();
  });
}

// Redirecting user to the correct area
logo.forEach((brand) => {
  brand.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

contactButton.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
});

portfolioButton.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "portfolio.html";
  });
});

// Redirecting to certain projects
todo.forEach((list) => {
  list.addEventListener("click", () => {
    window.location.href = "https://yesm4n.github.io/to-do-list/";
  });
});

bookmarkProject.forEach((project) => {
  project.addEventListener("click", () => {
    window.location.href = "https://yesm4n.github.io/bookmark-landing-page/";
  });
});

eCommerce.forEach((project) => {
  project.addEventListener("click", () => {
    window.location.href = "https://yesm4n.github.io/e-commerce/";
  });
});

roomLayout.forEach((room) => {
  room.addEventListener("click", () => {
    window.location.href = "https://yesm4n.github.io/room-layout/";
  });
});

// BUG

// Need a new form validation

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Under construction");
});
