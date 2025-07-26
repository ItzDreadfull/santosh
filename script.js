// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    html.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
}

// Theme toggle event listener
themeToggle.addEventListener('click', function () {
    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
});

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Open mobile menu
menuBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close mobile menu function
function closeMobileMenuFunc() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close mobile menu events
closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
mobileMenuOverlay.addEventListener('click', closeMobileMenuFunc);

// Close mobile menu when clicking nav links
mobileNavLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        closeMobileMenuFunc();

        // Smooth scroll to section after menu closes
        setTimeout(() => {
            scrollToSection(targetId);
        }, 300);
    });
});

// Close mobile menu on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
        closeMobileMenuFunc();
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;

    // Validate required fields
    if (!name || !email || !phone) {
        alert('Please fill in all required fields.');
        return;
    }

    // Show success message
    alert(`Thank you ${name}! Your consultation request for ${service} has been received. We'll contact you at ${email} within 24 hours.`);

    // Reset form
    this.reset();
});

// Header scroll effect and animations
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const scrolled = window.scrollY > 600;

    if (scrolled) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

    // Add scroll animations

    const elements = document.querySelectorAll('.card-hover');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-fade-in');
        }
    });
});

// Add click tracking for service cards
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('click', function () {
        const serviceName = this.querySelector('h3').textContent;
        scrollToSection('contact');

        // Pre-select the service in the form
        setTimeout(() => {
            const select = document.querySelector('select');
            for (let option of select.options) {
                if (option.text.includes(serviceName.split(' ')[0])) {
                    option.selected = true;
                    break;
                }
            }
        }, 500);
    });
});

(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9651f1a814cca74a',t:'MTc1MzUxMjQyOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();