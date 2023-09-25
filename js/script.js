const yearEl = document.getElementById('year');
yearEl.innerHTML = new Date().getFullYear();

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
})

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        if(link.classList.contains('main-nav-link')) {
            headerEl.classList.toggle('nav-open');
        }
    })
})