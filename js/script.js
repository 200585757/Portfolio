// script.js

// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Get the height of the header
        const headerHeight = header.offsetHeight;
        
        // Calculate the scroll position with offset
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        // Scroll to the section with smooth behavior
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

// Observe elements to apply fade-in effect
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
