const hamburger = document.querySelector('.hamburger-nav');
const sidebar = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
    });
});