// ===== THEME TOGGLE =====
const themeBtn = document.getElementById('theme-toggle');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') 
            ? 'Switch to Light Mode' 
            : 'Switch to Dark Mode';
    });
}

// ===== BACK TO TOP =====
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // Show back-to-top after scrolling 400px down
    if (window.scrollY > 400) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SLIDE-IN NAVIGATION =====
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const closeNav = document.querySelector('.close-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.add('open');
    });
}

if (closeNav) {
    closeNav.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
}

// Close nav when a link is clicked (important for single page!)
document.querySelectorAll('.primary-navigation a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
    });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.classList.add('scrolled');

    } else {

        header.classList.remove('scrolled');

    }

});