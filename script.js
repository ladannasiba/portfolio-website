document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    const links = document.querySelectorAll('.menu-links li');

    if (hamburgerIcon && menuLinks) {
        hamburgerIcon.addEventListener('click', () => {
            hamburgerIcon.classList.toggle('open');
            menuLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerIcon.classList.remove('open');
                menuLinks.classList.remove('open');
            });
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('section, .title, .section__pic-container, .about-details-container, .experience-details-container, .project-img, .contact-info-upper-container');

    animatedElements.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});