// Design History Artifacts Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = mobileMenuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Image gallery functionality (for artifact detail pages)
    const thumbnails = document.querySelectorAll('.thumbnail');
    const primaryImage = document.querySelector('.primary-image img');
    
    if (thumbnails.length > 0 && primaryImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update primary image
                primaryImage.src = this.querySelector('img').src;
                
                // Update active state
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current navigation item
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if the current page matches the nav link
        if (currentPage.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if (currentPage.endsWith('/') && linkPath === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // Image zoom functionality (if available)
    const zoomableImages = document.querySelectorAll('.zoomable');
    
    if (zoomableImages.length > 0) {
        zoomableImages.forEach(image => {
            image.addEventListener('click', function() {
                this.classList.toggle('zoomed');
            });
        });
    }
});

