 // selects all elements with the class name "menu-btn"
 const menubtns = document.querySelectorAll(".menu-btn");
 //    iterates over each element in the btns
 menubtns.forEach(function (btn) {
     btn.addEventListener("click", function (e) {

         const menu = e.currentTarget.parentElement.parentElement;
         menu.classList.toggle("show-text")
     })

 });


 // 
 document.addEventListener('DOMContentLoaded', function () {
     var printButtons = document.querySelectorAll('.print-btn');

     printButtons.forEach(function (button) {
         button.addEventListener('click', function () {
             var targetSelector = this.getAttribute('data-target');
             var targetSection = document.querySelector(targetSelector);

             // gide all sections except the target section
             var allSections = document.querySelectorAll('.menu');
             allSections.forEach(function (section) {
                 if (section !== targetSection) {
                     section.style.display = 'none';
                 }
             });

             // print the target section
             window.print();

             // show all sections again after printing
             allSections.forEach(function (section) {
                 section.style.display = '';
             });
         });
     });
 });
