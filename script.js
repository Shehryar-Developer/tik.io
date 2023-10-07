document.addEventListener("DOMContentLoaded", function () {
    // Get all elements you want to reveal
    var reveals = document.querySelectorAll(".reveal");
    var isRevealed = false; // Flag to check if elements are revealed

    // Add the scroll event listener to the window
    window.addEventListener("scroll", reveal);

    // Define the reveal function
    function reveal() {
      if (!isRevealed) {
        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }

        // Check if all elements have been revealed
        isRevealed = Array.from(reveals).every(function (el) {
          return el.classList.contains("active");
        });

        // If all elements are revealed, remove the scroll event listener
        if (isRevealed) {
          window.removeEventListener("scroll", reveal);
        }
      }
    }

    // Trigger reveal on initial page load
    reveal();
  });
{/* </script> */}





document.addEventListener("DOMContentLoaded", function () {
    // Get all elements you want to reveal
    var reveals = document.querySelectorAll(".reveal1");
    var isRevealed = false; // Flag to check if elements are revealed

    // Add the scroll event listener to the window
    window.addEventListener("scroll", reveal);

    // Define the reveal function
    function reveal() {
      if (!isRevealed) {
        for (var i = 0; i < reveals.length; i++) {
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;

          if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }

        // Check if all elements have been revealed
        isRevealed = Array.from(reveals).every(function (el) {
          return el.classList.contains("active");
        });

        // If all elements are revealed, remove the scroll event listener
        if (isRevealed) {
          window.removeEventListener("scroll", reveal);
        }
      }
    }

    // Trigger reveal on initial page load
    reveal();
  });
{/* </script> */}




// 
$(document).ready(function() {
  var navbar = $('.navbar');
  // var navlink = $('.navbar-nav .nav-link, .navbar span');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      navbar.addClass('light');
      navlink.addClass('dark');
      // navbar.removeClass('light');
    } else {
      navbar.removeClass('light');
      navlink.addClass('dark');

      // navbar.addClass('light');

    }
  });
});

if (window.innerWidth < 1000) {
  var navbar = document.querySelector(".navbar");
  navbar.style.position = ""; // Remove the "position" property
}

// 
$(document).ready(function(){
  $(".sidebar-form .call-action").click(function(){ 
     $(this).parents(".sidebar-form").toggleClass("show")

  });
});


// 
$(document).ready(function() {
  function startSlider() {
    setInterval(function() {
      const slideWidth = $('.slide').outerWidth();
      const currentLeft = parseInt($('.slides').css('left'));

      $('.slides').animate(
        {
          left: currentLeft - slideWidth,
        },
        500,
        function() {
          $('.slide:first-child').appendTo('.slides');
          $('.slides').css('left', 0);
        }
      );
    }, 3000);
  }

  startSlider();
});

// 
$(document).ready(function() {
  // Display the first cent1 div by default
  $(".cent1").hide(); // Hide all cent1 divs
  $(".center .cent1:nth-child(1)").show(); // Display the first cent1 div

  $(".fa-laptop").hover(function() {
    $(".cent1").hide(); // Hide all cent1 divs
    $(".center .cent1:nth-child(1)").show(); // Display the second cent1 div
  });


  // Hover event for the .fa-laptop icon
  $(".fa-volume-low").hover(function() {
    $(".cent1").hide(); // Hide all cent1 divs
    $(".center .cent1:nth-child(2)").show(); // Display the second cent1 div
  });

  // Hover event for the .fa-volume-low icon
  $(".fa-pencil").hover(function() {
    $(".cent1").hide(); // Hide all cent1 divs
    $(".center .cent1:nth-child(3)").show(); // Display the third cent1 div
  });

  // Hover event for the .fa-pencil icon
  $(".fa-tree").hover(function() {
    $(".cent1").hide(); // Hide all cent1 divs
    $(".center .cent1:nth-child(4)").show(); // Display the fourth cent1 div
  });

  // Add more similar hover events for other icons and cent1 divs
});



function showCategory(categoryName, clickedElement) {
  var categories = document.querySelectorAll('.category');
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.display = 'none';
  }
  
  var categoryToShow = document.querySelector('.' + categoryName);
  if (categoryToShow) {
    categoryToShow.style.display = 'block';
  }
  
  var listItems = document.querySelectorAll('li');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('selected');
  }
  
  clickedElement.classList.add('selected');
}




// orders
let previousIndex = null;

function cc(element) {
  var listItems = [
    { id: "website", text: "Website" },
    { id: "ecom", text: "Ecommerce" },
    // Add more list items here
  ];

  var clickedIndex = listItems.findIndex(item => item.text === element.textContent);

  if (previousIndex !== null) {
    var previousItem = listItems[previousIndex];
    var previousSection = document.getElementById(previousItem.id);
    if (previousSection) {
      previousSection.style.display = "none";
      document.querySelector(`li:contains(${previousItem.text})`).style.backgroundColor = "";
      document.querySelector(`li:contains(${previousItem.text})`).style.color = "#ad0081";
    }
  }
  console.log(1)
  var clickedItem = listItems[clickedIndex];
  var clickedSection = document.getElementById(clickedItem.id);
  if (clickedSection) {
    clickedSection.style.display = "block";
    element.style.backgroundColor = "#ad0081";
    element.style.color = "white";
    previousIndex = clickedIndex;
  }
}

function showCategory(categoryName) {
  var categories = document.querySelectorAll('.category');
  for (var i = 0; i < categories.length; i++) {
    categories[i].style.display = 'none';
  }
  
  var categoryToShow = document.querySelector('.' + categoryName);
  if (categoryToShow) {
    categoryToShow.style.display = 'block';
  }
}


// 

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements you want to reveal
  var reveals = document.querySelectorAll(".oo");
  var isRevealed = false; // Flag to check if elements are revealed

  // Add the scroll event listener to the window
  window.addEventListener("scroll", reveal);

  // Define the reveal function
  function reveal() {
    if (!isRevealed) {
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }

      // Check if all elements have been revealed
      isRevealed = Array.from(reveals).every(function (el) {
        return el.classList.contains("active");
      });

      // If all elements are revealed, remove the scroll event listener
      if (isRevealed) {
        window.removeEventListener("scroll", reveal);
      }
    }
  }

  // Trigger reveal on initial page load
  reveal();
});


document.addEventListener("DOMContentLoaded", function () {
  // Get all elements you want to reveal
  var reveals = document.querySelectorAll(".content");
  var isRevealed = false; // Flag to check if elements are revealed

  // Add the scroll event listener to the window
  window.addEventListener("scroll", reveal);

  // Define the reveal function
  function reveal() {
    if (!isRevealed) {
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }

      // Check if all elements have been revealed
      isRevealed = Array.from(reveals).every(function (el) {
        return el.classList.contains("active");
      });

      // If all elements are revealed, remove the scroll event listener
      if (isRevealed) {
        window.removeEventListener("scroll", reveal);
      }
    }
  }

  // Trigger reveal on initial page load
  reveal();
});


document.addEventListener("DOMContentLoaded", function () {
  // Get all elements you want to reveal
  var reveals = document.querySelectorAll(".rev");
  var isRevealed = false; // Flag to check if elements are revealed

  // Add the scroll event listener to the window
  window.addEventListener("scroll", reveal);

  // Define the reveal function
  function reveal() {
    if (!isRevealed) {
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }

      // Check if all elements have been revealed
      isRevealed = Array.from(reveals).every(function (el) {
        return el.classList.contains("active");
      });

      // If all elements are revealed, remove the scroll event listener
      if (isRevealed) {
        window.removeEventListener("scroll", reveal);
      }
    }
  }

  // Trigger reveal on initial page load
  reveal();
});


document.addEventListener("DOMContentLoaded", function () {
  // Get all elements you want to reveal
  var reveals = document.querySelectorAll(".form");
  var isRevealed = false; // Flag to check if elements are revealed

  // Add the scroll event listener to the window
  window.addEventListener("scroll", reveal);

  // Define the reveal function
  function reveal() {
    if (!isRevealed) {
      for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }

      // Check if all elements have been revealed
      isRevealed = Array.from(reveals).every(function (el) {
        return el.classList.contains("active");
      });

      // If all elements are revealed, remove the scroll event listener
      if (isRevealed) {
        window.removeEventListener("scroll", reveal);
      }
    }
  }

  // Trigger reveal on initial page load
  reveal();
});


// confetti started
        const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000);
        };

        start();
        // stop();


// function sendEmail(){
//   var params = {
//     name:document.getElementById("name").value,
//     email:document.getElementById("email").value,
//     message:document.getElementById('message').value,
//     phone:document.getElementById("number").value,

//   };
// }

// const serviceID = "service_z1dd5nn";
// const templateID = 