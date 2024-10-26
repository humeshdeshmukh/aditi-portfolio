// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark Mode Toggle
  const toggleThemeButton = document.createElement('button');
  toggleThemeButton.className = 'btn btn-outline-dark theme-toggle';
  toggleThemeButton.innerText = 'Toggle Theme';
  document.querySelector('.navbar').appendChild(toggleThemeButton);
  
  toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      document.body.style.backgroundColor = '#222';
      document.body.style.color = '#f9f9f9';
      toggleThemeButton.innerText = 'Light Mode';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#333';
      toggleThemeButton.innerText = 'Dark Mode';
    }
  });
  
  // Contact Form Validation (for a simple contact form if added)
  function validateForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;
  
    if (!name.value.trim()) {
      name.classList.add('is-invalid');
      isValid = false;
    } else {
      name.classList.remove('is-invalid');
    }
  
    if (!email.value.includes('@')) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }
  
    if (!message.value.trim()) {
      message.classList.add('is-invalid');
      isValid = false;
    } else {
      message.classList.remove('is-invalid');
    }
  
    return isValid;
  }
  
  // Adding form submission event listener
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (validateForm()) {
        alert('Thank you for reaching out!');
        contactForm.reset();
      } else {
        alert('Please fill in all fields correctly.');
      }
    });
  }
  