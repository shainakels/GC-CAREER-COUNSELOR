// BOOTSTRAP BUNDLE WITH POPPER
var script = document.createElement('script');

// BOOTSTRAP JS FILE URL 
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js';

// INTEGRITY ATTRIBUTE
script.integrity = 'sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf';

// CROSSORIGIN ATTRIBUTE
script.crossOrigin = 'anonymous';
document.head.appendChild(script);

//FOR SIDEBAR DROP DOWN FUNCTION
document.addEventListener("DOMContentLoaded", function () {
    const checkbtn = document.querySelector('.checkbtn');
    const sideMenu = document.querySelector('.side-menu');

    checkbtn.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });
});
