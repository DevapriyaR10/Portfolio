function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var navbarHeight = document.getElementById("desktop-nav").offsetHeight;

    // Scroll to the section with an offset to account for fixed navbar
    window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


var div1 = document.getElementById("s1");
var div2 = document.getElementById("s2");

div1.style.display = 'none';
div2.style.display = 'none';

function hideShow() {
    if (div2.style.display === 'block') {
        div2.style.display = 'none';
    }

    if (div1.style.display === 'none') {
        div1.style.display = 'block';
    } else {
        div1.style.display = 'none';
    }
}

function hideShow1() {
    
    if (div1.style.display === 'block') {
        div1.style.display = 'none';
    }

    if (div2.style.display === 'none') {
        div2.style.display = 'block';
    } else {
        div2.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("desktop-nav");
    navbar.classList.add("slide-down");
});

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("hamburger-nav");
    navbar.classList.add("slide-down");
});

document.addEventListener("DOMContentLoaded", function() {
    var slideInText = document.getElementById("slideInText");
    slideInText.classList.add("slide-in-text");
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('img').classList.add('loaded');
});


