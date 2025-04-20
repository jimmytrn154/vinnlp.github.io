document.addEventListener('DOMContentLoaded', function () {
    // Initialize Typed.js for the hero h1 without backspacing
    var typed = new Typed("#hero-h1", {
      strings: ["Welcome to NLP Bridges", "a VinNLP Initiative"],
      typeSpeed: 40,      // Adjust typing speed as needed
      backSpeed: 55,
      loop: true,        // Do not loop or backspace after typing
      showCursor: false,
      cursorChar: '|',
      startDelay: 100,
      backDelay: 1000 // time a text appear
    });
  
    // Mobile Menu Toggle for Improved Mobile Responsiveness
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Hide mobile menu after selection (for small screens)
        if (window.innerWidth < 768) {
          mobileMenu.classList.add('hidden');
        }
      });
    });
  
    // Pill-Style Tabs for Research & Projects Section
    const tabTopics = document.getElementById('tabTopics');
    const tabProjects = document.getElementById('tabProjects');
    const contentTopics = document.getElementById('contentTopics');
    const contentProjects = document.getElementById('contentProjects');
  
    tabTopics.addEventListener('click', function () {
      // Activate Topics tab
      tabTopics.classList.remove('bg-gray-200', 'text-gray-700');
      tabTopics.classList.add('bg-blue-600', 'text-white');
  
      // Set Projects tab to inactive
      tabProjects.classList.remove('bg-blue-600', 'text-white');
      tabProjects.classList.add('bg-gray-200', 'text-gray-700');
  
      // Show Topics content, hide Projects content
      contentTopics.classList.remove('hidden');
      contentProjects.classList.add('hidden');
    });
  
    tabProjects.addEventListener('click', function () {
      // Activate Projects tab
      tabProjects.classList.remove('bg-gray-200', 'text-gray-700');
      tabProjects.classList.add('bg-blue-600', 'text-white');
  
      // Set Topics tab to inactive
      tabTopics.classList.remove('bg-blue-600', 'text-white');
      tabTopics.classList.add('bg-gray-200', 'text-gray-700');
  
      // Show Projects content, hide Topics content
      contentProjects.classList.remove('hidden');
      contentTopics.classList.add('hidden');
    });
  });
  