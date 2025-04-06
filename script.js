// Array of background images for each section
const backgrounds = [
    "url('https://via.placeholder.com/1920x1080/FF5733/FFFFFF')", // Home
    "url('https://via.placeholder.com/1920x1080/C70039/FFFFFF')", // About
    "url('https://via.placeholder.com/1920x1080/900C3F/FFFFFF')", // Events
    "url('https://via.placeholder.com/1920x1080/581845/FFFFFF')", // Blog
    "url('https://via.placeholder.com/1920x1080/4A235A/FFFFFF')", // Contact
  ];
  
  // Get all sections
  const sections = document.querySelectorAll('.section');
  
  // Function to update background based on scroll position
  function updateBackground() {
    const scrollPosition = window.scrollY;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.body.style.backgroundImage = backgrounds[index];
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', updateBackground);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });