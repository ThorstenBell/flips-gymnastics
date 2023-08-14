let navOpen = false;
document.getElementById("hamburger-menu").addEventListener("click", () => {
    if (navOpen === false) {
        document.getElementById("navbar-links").style.display = "flex";
        document.getElementById("menu-icon").style.backgroundImage = "url('images/close.svg')";
        navOpen = true;
    } else {
        document.getElementById("navbar-links").style.display = "none";
        document.getElementById("menu-icon").style.backgroundImage = "url('images/menu.svg')";
        navOpen = false;
    }
});

document.getElementById("navbar-links").addEventListener("click", () => {
    if (navOpen === true) {
        document.getElementById("navbar-links").style.display = "none";
        document.getElementById("menu-icon").style.backgroundImage = "url('images/menu.svg')";
        navOpen = false;
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        document.getElementById("navbar-links").style.display = "none";
    } else {
        document.getElementById("navbar-links").style.display = "flex";
    }
    document.getElementById("menu-icon").style.backgroundImage = "url('images/menu.svg')";
    navOpen = false;
});

document.getElementById("flips").addEventListener("click", () => {
    window.scrollTo(0, 0);
});
