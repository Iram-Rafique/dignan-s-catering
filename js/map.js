let modal = document.getElementById("map-modal");
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
openBtn.addEventListener("click",function(){
    modal.classList.add("showMap")
})
closeBtn.addEventListener("click",function(){
    modal.classList.remove("showMap")})



    // hamburgerMenu
    document.getElementById('menu-icon').addEventListener('click', function() {
        var nav = document.querySelector('.main-nav');
        nav.classList.toggle('showNav');
    
    });