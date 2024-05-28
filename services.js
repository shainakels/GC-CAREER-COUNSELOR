//FOR SIDEBAR DROPDOWN MENU FUNCTION
document.addEventListener("DOMContentLoaded", function () {
    const checkbtn = document.querySelector('.checkbtn');
    const sideMenu = document.querySelector('.side-menu');
  
    checkbtn.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });
  });