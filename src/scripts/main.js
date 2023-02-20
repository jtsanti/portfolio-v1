// Get and display current year in footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Chevron animations
const nextArrow = document.getElementById('next-arrow');
const backToTop = document.getElementById('home');

const animateChevron = (time) => {
    setTimeout(() => {
        nextArrow.classList.add('fa-bounce');
    }, time);
}

const stopAnimateChevron = () => {
    nextArrow.classList.remove('fa-bounce');
}

// Close Bootstrap nav menu when clicked on mobile
function closeNavOnClick() {
    const navItems = document.querySelectorAll('.nav-item')
    const navBar = document.getElementById('navbarNav')
    const collapse = new bootstrap.Collapse(navBar);

    navItems.forEach((link) => {
        link.addEventListener('click', () => { collapse.toggle() })
    })
}


window.onload = () => {
    animateChevron(1000);

    nextArrow.onclick = () => {
        stopAnimateChevron();
    }
    
    backToTop.onclick = () => {
        animateChevron(4000);
    }

    closeNavOnClick();
}