'use strict';

// Global variables
const toggleButton = document.querySelector('.toggle-button');
const listStyles = document.querySelector('.list-styles');
const listItem = document.querySelectorAll('.list-styles li a');
const openMenu = document.querySelector('.open');

// Hamburger toggle
toggleButton.addEventListener('click', () => {
  listStyles.classList.toggle('active');
  listItem.forEach(item => {
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      openMenu.src = 'images/icons/close.svg';
    } else {
      openMenu.src = 'images/icons/hamburger.svg';
    }
  });
});

// Page scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // entry.target.classList.remove('show');
    }
  });
});

const hidden = document.querySelectorAll('.hidden');
hidden.forEach(el => observer.observe(el));

// Buttons interaction
const logo = document.querySelectorAll('.logo');
const introButton = document.querySelector('.intro-button');
const contactButton = document.querySelectorAll('.contact');
const portfolioButton = document.querySelectorAll('.portfolio');
const todo = document.querySelectorAll('.todo');
const bookmarkProject = document.querySelectorAll('.bookmark');
const eCommerce = document.querySelectorAll('.e-commerce');
const roomLayout = document.querySelectorAll('.room-layout');

// Scrolling to about me
if (introButton !== null) {
  introButton.addEventListener('click', () => {
    scrollTo(0, 800);
  });
}

// Redirecting user to the correct area
logo.forEach(brand => {
  brand.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});

contactButton.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });
});

portfolioButton.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'portfolio.html';
  });
});

todo.forEach(list => {
  list.addEventListener('click', () => {
    window.location.href = 'https://yesm4n.github.io/to-do-list/';
  });
});

bookmarkProject.forEach(project => {
  project.addEventListener('click', () => {
    window.location.href = 'https://yesm4n.github.io/bookmark-landing-page/';
  });
});

eCommerce.forEach(project => {
  project.addEventListener('click', () => {
    window.location.href = 'https://yesm4n.github.io/e-commerce/';
  });
});

roomLayout.forEach(room => {
  room.addEventListener('click', () => {
    window.location.href = 'https://yesm4n.github.io/room-layout/';
  });
});

// Form and input variables
const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('myName');
const emailInput = document.getElementById('myEmail');
const textAreaInput = document.getElementById('myTextarea');

// Validation form
const formValidation = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === '') {
    console.log('Name must be filled');
    nameInput.style.border = '1px solid var(--error)';
  } else if (emailInput.value.trim() === '') {
    console.log('Email must be filled');
    emailInput.style.border = '1px solid var(--error)';
  } else if (!emailRegex.test(emailInput.value)) {
    console.log('Invalid email format');
    emailInput.style.border = '1px solid var(--error)';
  } else if (textAreaInput.value.trim() === '') {
    console.log('Cannot be empty');
    textAreaInput.style.border = '1px solid var(--error)';
  } else {
    console.log('Success');
    nameInput.style.border =
      '1px solid var(--primary-hover: hsl(167, 36%, 54%))';
    emailInput.style.border = '1px solid (--primary-hover: hsl(167, 36%, 54%))';
    textAreaInput.style.border =
      '1px solid (--primary-hover: hsl(167, 36%, 54%))';
    window.open(
      `mailto:mrylliramadani@gmail.com?subject=${nameInput.value}&body=${textAreaInput.value}`
    );
    myForm.reset();

    setTimeout(() => {
      nameInput.style.border = '';
      emailInput.style.border = '';
      textAreaInput.style.border = '';
    }, 3000);
  }
};

// Preventing error when not in the correct page
if (myForm !== null) {
  myForm.addEventListener('submit', e => {
    e.preventDefault();
    formValidation();
  });
}
