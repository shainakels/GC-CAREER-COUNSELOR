function redirectToLink(link) {
    // functions to redirect to the specified link (facebook page)
     window.location.href = link;
}

//FOR SIDEBAR DROPDOWN FUNCTION
document.addEventListener("DOMContentLoaded", function () {
    const checkbtn = document.querySelector('.checkbtn');
    const sideMenu = document.querySelector('.side-menu');

    checkbtn.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });
});
