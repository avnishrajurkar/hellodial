// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scroll-top');
const testimonialsSlider = document.getElementById('testimonials-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const sliderDots = document.getElementById('slider-dots');
const contactForm = document.getElementById('contact-form');
const phoneInput = document.getElementById('phone-input');
const getStartedBtn = document.getElementById('get-started-btn');

// ===================================
// State
// ===================================
let currentSlide = 0;
let totalSlides = 3;
let slideInterval;

// ===================================
// Navigation Functions
// ===================================

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navMenu.classList.remove('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Scroll Functions
// ===================================

// Handle navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Handle scroll to top button visibility
function handleScrollTop() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll for anchor links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
}

// ===================================
// Testimonials Slider
// ===================================

// Create slider dots
function createSliderDots() {
    sliderDots.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => goToSlide(i));
        sliderDots.appendChild(dot);
    }
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Update slider display
function updateSlider() {
    const cards = testimonialsSlider.querySelectorAll('.testimonial-card');
    
    cards.forEach((card, index) => {
        card.style.display = index === currentSlide ? 'block' : 'none';
    });
    
    // Update dots
    const dots = sliderDots.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Reset interval
    resetSlideInterval();
}

// Reset slide interval
function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize slider
function initSlider() {
    createSliderDots();
    updateSlider();
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    resetSlideInterval();
}

// ===================================
// Form Handling
// ===================================

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.required && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--error)';
        } else {
            input.style.borderColor = 'var(--gray-200)';
        }
    });
    
    if (isValid) {
        // Show success message (in real app, send to server)
        showNotification('Thank you! We will get back to you soon.', 'success');
        contactForm.reset();
    }
}

// Handle get started button
function handleGetStarted() {
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        phoneInput.style.borderColor = 'var(--error)';
        showNotification('Please enter your phone number', 'error');
        return;
    }
    
    // Validate phone number (simple validation)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        phoneInput.style.borderColor = 'var(--error)';
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
    }
    
    // Success (in real app, send to server)
    phoneInput.style.borderColor = 'var(--success)';
    showNotification('Thank you! We will call you shortly.', 'success');
    phoneInput.value = '';
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--error)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===================================
// Animation on Scroll
// ===================================

// Add animation classes to elements when they come into view
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.service-card, .step-card, .feature-item, .testimonial-card');
    
    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .step-card, .feature-item, .testimonial-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// ===================================
// Event Listeners
// ===================================

function initEventListeners() {
    // Mobile menu toggle
    mobileToggle.addEventListener('click', toggleMobileMenu);
    
    // Nav links
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Scroll events
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleScrollTop();
        updateActiveNavLink();
        animateOnScroll();
    });
    
    // Scroll to top button
    scrollTopBtn.addEventListener('click', scrollToTop);
    
    // Contact form
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Get started button
    getStartedBtn.addEventListener('click', handleGetStarted);
    
    // Phone input validation
    phoneInput.addEventListener('input', () => {
        phoneInput.style.borderColor = 'var(--gray-200)';
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

// ===================================
// Add CSS for notifications
// ===================================

function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// Initialize Everything
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    initSlider();
    initAnimations();
    addNotificationStyles();
    animateOnScroll();
    
    // Log initialization
    console.log('HelloDials website initialized successfully! 🎉');
});

// ===================================
// Performance Optimization
// ===================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Service Worker Registration (Optional for PWA)
// ===================================

// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
*/
