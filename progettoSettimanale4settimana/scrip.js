document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('menuTesta');
    var button = document.getElementById('buttonMain');

    var button1=document.getElementById("bottoneMenu");
  
    // Listener for scroll event
    window.addEventListener('scroll', function () {
      // Get the position of the button relative to the viewport
      var buttonPosition = button.getBoundingClientRect().top;
  
      // Check if the button is above the viewport
      if (buttonPosition < 0) {
        // If it is, add the 'scrolled' class to the navbar
        navbar.classList.add('scrolled');

        button1.classList.add('scrolled');
      } else {
        // If not, remove the 'scrolled' class
        navbar.classList.remove('scrolled');

        button1.classList.remove('scrolled');
      }
    });
  });
  
  