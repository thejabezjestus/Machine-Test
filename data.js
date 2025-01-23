function validate(){

    let Username = document.getElementById("Username").
    value;
    let Password = document.getElementById("password").
    value;

    if(Username =="webdev" && Password=="12345"){

        alert( "Login successful")

    } else{
    alert("Login failed")
    } 
}


  document.addEventListener("DOMContentLoaded", function () {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('#navbarNav');

      navbarToggler.addEventListener('click', function () {
          navbarCollapse.classList.toggle('show');
      });
  });
