document.getElementById("nav-menu-icon").addEventListener('click', function () {
    var nav = document.querySelector('.main-nav');
    nav.classList.toggle('showNav');
    // document.getElementById('nav-menu-icon').style.display = 'none';
    // document.getElementById('nav-closeBtn').style.display = 'block';
});


document.getElementById('nav-closeBtn').addEventListener('click', function () {
    var nav = document.querySelector('.main-nav');
    nav.classList.remove('showNav');
    // document.getElementById('nav-menu-icon').style.display = 'block';
    // document.getElementById('nav-closeBtn').style.display = 'none';
});


// footer year
document.getElementById("year").textContent = '\u00A9 ' + new Date().getFullYear() + 'Dignans Hospitality. All rights reserved.';
