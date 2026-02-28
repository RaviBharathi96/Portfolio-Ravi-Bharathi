// Typed.js Initialization for Hero Section
const typed = new Typed('#typed-text', {
  strings: ['Ravi Bharathi S S', 'a Developer', 'a Student'],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true,
});

// AOS (Animate on Scroll) Library Initialization
AOS.init({
    duration: 800,
    once: true,
});

// Active Link Highlighting on Scroll
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    const updateActiveLink = () => {
        let currentSectionId = 'hero';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});

// Menu Toggle Functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// Skill Bar Animation on Scroll
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-bar');

const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                bar.classList.add('animate');
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillsObserver.observe(skillsSection);