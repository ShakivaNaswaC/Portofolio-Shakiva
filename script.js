// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.experience-card, .project-card, .tech-item').forEach(el => {
    observer.observe(el);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for background dots
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        const speed = 0.5 + (index * 0.1);
        dot.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Profile image hover effect
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    profileCard.addEventListener('mouseenter', () => {
        profileCard.classList.add('pulse');
    });
    
    profileCard.addEventListener('mouseleave', () => {
        profileCard.classList.remove('pulse');
    });
}

// Tech stack items animation
document.querySelectorAll('.tech-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('hover-lift');
});

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transition = 'all 0.6s ease';
    
    if (index % 2 === 0) {
        item.style.transform = 'translateX(-50px)';
    } else {
        item.style.transform = 'translateX(50px)';
    }
    
    timelineObserver.observe(item);
});

// Contact button interaction
const contactBtn = document.querySelector('.btn-contact');
if (contactBtn) {
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Simulate email action (replace with actual email functionality)
        setTimeout(() => {
            alert('Email functionality would be implemented here!');
        }, 300);
    });
}

// Social links hover effects
document.querySelectorAll('.social-link, .footer-social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Download CV button functionality
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add loading effect
    const originalText = this.textContent;
    this.textContent = 'Downloading...';
    this.style.opacity = '0.7';
    this.style.pointerEvents = 'none';
    
    // Simulate download (replace with actual download functionality)
    setTimeout(() => {
        this.textContent = originalText;
        this.style.opacity = '1';
        this.style.pointerEvents = 'auto';
        alert('CV download functionality would be implemented here!');
    }, 2000);
});

// View Portfolio button functionality
document.querySelector('.btn-secondary').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Smooth scroll to projects section
    const projectSection = document.querySelector('#project');
    if (projectSection) {
        projectSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Project GitHub links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Simulate GitHub redirect (replace with actual GitHub URLs)
        setTimeout(() => {
            alert('GitHub repository would open here!');
        }, 300);
    });
});

// Initialize all animations and effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Stagger animation for tech stack items
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Initial setup for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Adjust animations based on screen size
    const dots = document.querySelectorAll('.dot');
    if (window.innerWidth <= 768) {
        dots.forEach(dot => {
            dot.style.animationDuration = '8s';
        });
    } else {
        dots.forEach(dot => {
            dot.style.animationDuration = '6s';
        });
    }
});

// Performance optimization: Throttle scroll events
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
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps