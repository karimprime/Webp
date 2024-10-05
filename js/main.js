document.addEventListener('DOMContentLoaded', () => {
    const btnl = document.getElementById('btnl');
    const navLinks = document.getElementById('navLinks');

    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        btnl.classList.toggle('active');
    };

    btnl.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});


const photoContainer = document.getElementById('imk');
const logo = document.getElementById('logo');

let lastScrollTop = 300;

window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {

        photoContainer.style.opacity = '0';
        logo.style.opacity = '1';
    } else {

        photoContainer.style.opacity = '1';
        logo.style.opacity = '0';
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});


const body = document.querySelector('body');

const ld = document.getElementById('ld');
const dl = document.getElementById('dl');

function colors(color) {
    localStorage.setItem('color', color);

    if (color === '#222') {
        body.classList.add('dark-mode');
        ld.classList.add('hide');
        dl.classList.remove('hide');
    } else {
        body.classList.remove('dark-mode');
        dl.classList.add('hide');
        ld.classList.remove('hide');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const storedColor = localStorage.getItem('color');

    if (storedColor) {

        if (storedColor === '#222') {
            body.classList.add('dark-mode');
            ld.classList.add('hide');
            dl.classList.remove('hide');
        } else {
            body.classList.remove('dark-mode');
            dl.classList.add('hide');
            ld.classList.remove('hide');
        }
    }
});


let btn = document.getElementById('btn');
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}

let sidebutton = document.getElementById('sidebutton');
window.onscroll = function () {
    if (scrollY >= 450) {
        sidebutton.style.display = 'block';
    }
    else {
        sidebutton.style.display = 'none';
    }
}