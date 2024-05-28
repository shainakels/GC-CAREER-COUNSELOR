// ENABLES FUNCTIONALITY OF COLLAPSING AND EXPANDING THE ACCORDION PANELS WHEN CLICKED
var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;

        if (pannel.style.display === "block") {
          pannel.style.display = "none";
        } else {
          pannel.style.display = "block";
        }
      });
    }
  
//FOR SIDEBAR DROPDOWN MENU FUNCTION
document.addEventListener("DOMContentLoaded", function () {
  const checkbtn = document.querySelector('.checkbtn');
  const sideMenu = document.querySelector('.side-menu');

  checkbtn.addEventListener('click', function () {
      sideMenu.classList.toggle('active');
  });
});