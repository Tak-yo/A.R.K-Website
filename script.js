// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked (only on mobile)
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Only close on mobile screens
        if (window.innerWidth <= 768 && navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Close menu when clicking outside (mobile only)
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        const isClickInsideNav = navMenu && navMenu.contains(event.target);
        const isClickOnHamburger = hamburger && hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// Event signup button functionality
const signupButtons = document.querySelectorAll('.btn-primary');
signupButtons.forEach(button => {
    // if (button.textContent.includes('Sign Up')) {
    //     button.addEventListener('click', function() {
    //         alert('Thank you for your interest! Event signup form will be available soon. Please follow us on Instagram @arkinitiative.sg for updates.');
    //     });
    // }
});

// Newsletter subscription
const newsletterBtn = document.querySelector('.newsletter-section .btn-outline');
if (newsletterBtn) {
    // newsletterBtn.addEventListener('click', function() {
    //     alert('Thank you for your interest in subscribing! Please follow us on Instagram @arkinitiative.sg for the latest updates.');
    // });
}

// Get Involved button
const getInvolvedButtons = document.querySelectorAll('.btn-primary, .btn-white');
getInvolvedButtons.forEach(button => {
    // if (button.textContent.includes('Get Involved')) {
    //     button.addEventListener('click', function() {
    //         alert('We\'d love to have you join us! Please reach out to us at hello@arkinitiative.sg or follow us on Instagram @arkinitiative.sg');
    //     });
    // }
});

// Contact Us button
const contactButtons = document.querySelectorAll('.btn-outline-white, .btn-outline');
contactButtons.forEach(button => {
    // if (button.textContent.includes('Contact')) {
    //     button.addEventListener('click', function() {
    //         alert('Contact us at hello@arkinitiative.sg or follow us on Instagram @arkinitiative.sg');
    //     });
    // }
});

// Follow Us button
const followButtons = document.querySelectorAll('.btn-outline');
followButtons.forEach(button => {
    if (button.textContent.includes('Follow')) {
        button.addEventListener('click', function() {
            window.open('https://www.instagram.com/arkinitiative.sg/', '_blank');
        });
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 60; // Adjust this number to match your header height
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card, .event-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

function scrollToWithOffset(elementId, offset) {
    const element = document.getElementById(elementId);
    if (element) {
        const targetPosition = element.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}