// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initMagneticButtons();
    initScrollReveal();
    initParticles();
    initFAQ();
    initParallax();
});

// Custom Cursor Logic
function initCursor() {
    const cursor = document.getElementById('cursor-glow');
    if (!cursor) return;

    // Fast follow logic
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    // Smooth trailing factor
    const speed = 0.15;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Interpolate position
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Enlarge cursor on interactive elements
    const interactives = document.querySelectorAll('a, button, .faq-question');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '120px';
            cursor.style.height = '120px';
            cursor.style.background = 'radial-gradient(circle, rgba(244, 180, 0, 0.2) 0%, rgba(0,0,0,0) 70%)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '400px';
            cursor.style.height = '400px';
            cursor.style.background = 'radial-gradient(circle, rgba(244, 180, 0, 0.08) 0%, rgba(0,0,0,0) 70%)';
        });
    });
}

// Magnetic Buttons
function initMagneticButtons() {
    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const strength = btn.dataset.strength || 20;

            // Move button
            btn.style.transform = `translate(${x * (strength / 100)}px, ${y * (strength / 100)}px)`;

            // Move text/children slightly more for depth
            const children = Array.from(btn.children);
            children.forEach(child => {
                child.style.transform = `translate(${x * ((strength * 1.5) / 100)}px, ${y * ((strength * 1.5) / 100)}px)`;
            });
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
            const children = Array.from(btn.children);
            children.forEach(child => {
                child.style.transform = 'translate(0px, 0px)';
            });
        });
    });
}

// Scroll Reveals using Intersection Observer
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    // Navbar style on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// Background Floating Particles
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
        const size = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
}

// FAQ Accordion
function initFAQ() {
    const faqs = document.querySelectorAll('.faq-item');

    faqs.forEach(faq => {
        const btn = faq.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isActive = faq.classList.contains('active');

            // Close all
            faqs.forEach(f => f.classList.remove('active'));

            // Open clicked if it wasn't active
            if (!isActive) {
                faq.classList.add('active');
            }
        });
    });
}

// Smooth Parallax on scroll
function initParallax() {
    const parallaxItems = document.querySelectorAll('.parallax-item');

    // We use requestAnimationFrame for smooth parallax
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxItems.forEach(item => {
                    const speed = parseFloat(item.dataset.speed || 0.05);
                    const rect = item.getBoundingClientRect();

                    // Only animate if in viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        // Calculate offset based on element center relative to viewport center
                        const yOffset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
                        // Combine with existing transform if any (assume only translateY for simplicity here)
                        // Note: To not conflict with .reveal transforms, we wrap inner content or apply carefully.
                        // Here we apply directly to the item, assuming it doesn't conflict drastically with reveal completion
                        if (item.classList.contains('visible')) {
                            item.style.transform = `translateY(${yOffset}px)`;
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}
