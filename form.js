document.addEventListener("DOMContentLoaded", function () {
  const checkbtn = document.querySelector('.checkbtn');
  const sideMenu = document.querySelector('.side-menu');

  checkbtn.addEventListener('click', function () {
      sideMenu.classList.toggle('active');
  });
});

function emailSend() {
  var userName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  var messageBody = "Name: " + userName + 
                    "<br/>Email: " + email +
                    "<br/>Phone: " + phone +
                    "<br/>Message: " + message;

  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "shainakyla.simon@gmail.com",
      Password: "03E6DB1C2FB359AA52322393C4416915A698",
      To: 'gccareercounselor@gmail.com',
      From: "shainakyla.simon@gmail.com",
      Subject: "This is the subject",
      Body: messageBody,
      Port: 587,                   
      Secure: true 
  }).then(
      message => {
          if (message == 'OK') {
              swal("Submitted", "Thank you for reaching out to GCCC!", "success");
          } else {
              swal("Error", "There was an error sending your email. Please try again.", "error");
          }
      }
  ).catch(
      error => {
          swal("Error", "There was an error sending your email: " + error, "error");
      }
  );
}
