/**
 * Savon Forestry Services - Main JavaScript
 * Handles interactivity and animations
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Close mobile menu if open
                document.getElementById('nav-toggle').checked = false;
                
                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.1)';
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLinkOnScroll();
    });
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.style.display = 'none';
                }
            });
            
            document.querySelectorAll('.faq-toggle').forEach(item => {
                if (item !== toggle) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            toggle.classList.toggle('active');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
    
    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Hide all testimonials except the first one
    if (testimonials.length > 1) {
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
    }
    
    // Previous testimonial button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        });
    }
    
    // Next testimonial button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        });
    }
    
    // Auto-rotate testimonials
    if (testimonials.length > 1) {
        setInterval(function() {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 8000);
    }
    
    // Helper function to update active nav link
    function updateActiveNavLink(targetId) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }
    
    // Helper function to update active nav link based on scroll position
    function updateActiveNavLinkOnScroll() {
        const scrollPosition = window.scrollY;
        
        // Get all sections
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = '#' + section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Add "New" badge to Blog nav item
    document.querySelector('a[href="#blog"]').innerHTML += ' <span class="nav-badge">New</span>';
    
    // Initialize page
    updateActiveNavLinkOnScroll();
});
