// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initScrollSpy();
    initSmoothScroll();
    initFadeInAnimations();
    initNavbarScroll();
    initCopyToClipboard();
    initHoverEffects();
    initCollapseAnimations();
}

// Smooth Scroll Functionality
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ScrollSpy Implementation
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call once on load
}

// Fade In Animations with Intersection Observer
function initFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on load
}

// Copy to Clipboard Functionality
function initCopyToClipboard() {
    const copyTechElements = document.querySelectorAll('.copy-tech');
    
    copyTechElements.forEach(element => {
        element.addEventListener('click', function() {
            const techName = this.dataset.tech;
            
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(techName).then(() => {
                    showCopyFeedback(this, 'Másolva!');
                }).catch(() => {
                    fallbackCopyTextToClipboard(techName, this);
                });
            } else {
                fallbackCopyTextToClipboard(techName, this);
            }
        });
    });
}

function fallbackCopyTextToClipboard(text, element) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback(element, 'Másolva!');
    } catch (err) {
        showCopyFeedback(element, 'Másolás sikertelen');
    }
    
    document.body.removeChild(textArea);
}

function showCopyFeedback(element, message) {
    const originalText = element.innerHTML;
    element.innerHTML = message;
    element.style.backgroundColor = '#28a745';
    element.style.color = 'white';
    
    setTimeout(() => {
        element.innerHTML = originalText;
        element.style.backgroundColor = '';
        element.style.color = '';
    }, 1500);
}

// Hover Effects Enhancement
function initHoverEffects() {
    const hoverElements = document.querySelectorAll('.card-raise, .hover-glow');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
}

// Collapse Animation Enhancement
function initCollapseAnimations() {
    const collapseButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    
    collapseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon && icon.classList.contains('bi-chevron-down')) {
                setTimeout(() => {
                    if (this.getAttribute('aria-expanded') === 'true') {
                        icon.style.transform = 'rotate(180deg)';
                    } else {
                        icon.style.transform = 'rotate(0deg)';
                    }
                }, 10);
            }
        });
    });
    
    // Handle accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a small delay to ensure Bootstrap has processed the state
            setTimeout(() => {
                const isExpanded = !this.classList.contains('collapsed');
                const icon = this.querySelector('i');
                if (icon) {
                    icon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            }, 10);
        });
    });
}

// Utility function to throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Any additional scroll-based functionality can be added here
}, 16)); // ~60fps

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate positions if needed
    // This can be useful for responsive adjustments
});

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger any post-load animations
    const heroElements = document.querySelectorAll('#hero .fade-in-element');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-visible');
        }, index * 200);
    });
});

// Error handling for navigation
window.addEventListener('error', function(e) {
    console.warn('Navigation error:', e.message);
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Handle escape key for closing modals/dropdowns
    if (e.key === 'Escape') {
        const openCollapses = document.querySelectorAll('.collapse.show');
        openCollapses.forEach(collapse => {
            const bsCollapse = new bootstrap.Collapse(collapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    }
});

// Performance optimization: Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        // Add any critical images here if needed
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadCriticalResources();
