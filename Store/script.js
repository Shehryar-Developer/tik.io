var activeItem = null;

  function toggleActive(item) {
    // Check if there is a previously active item
    if (activeItem !== null) {
      activeItem.classList.remove('active-item'); // Remove the 'active-item' class
    }

    // Set the clicked item as the active item
    item.parentElement.classList.add('active-item'); // Add the 'active-item' class to the parent li
    activeItem = item.parentElement; // Update the activeItem variable
  }

  $(document).ready(function(){
    $('#flightCarousel').slick({
        slidesToShow: 3,     // Number of slides to show at once
        slidesToScroll: 1,   // Number of slides to scroll
        autoplay: true,
        autoplaySpeed: 3000, // Autoplay interval in milliseconds
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

/* <script>
  // Function to change the navbar background color on scroll */

  // To change the position of the image's top property to zero from 2rem on scroll, you can modify your JavaScript code as follows:

  // javascript
  // Copy code
  function changeNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    const img = document.getElementById("2");
    if (window.scrollY > 2) { // Check if scrolled more than 2rem
      navbar.classList.add('scrolled');
      img.style.top = '0 !important'; // Set the new top position to zero
    } else {
      navbar.classList.remove('scrolled');
      img.style.top = '2rem !important'; // Set the original top position to 2rem
    }
  }
  
  
  // Attach the scroll event listener to the window
  window.addEventListener('scroll', changeNavbarBackground);
  
  // Initialize the background color and image height based on the initial scroll position
  changeNavbarBackground();
  

  // 
// JavaScript to toggle the custom dropdown options
function toggleDropdown() {
  const ul = document.querySelector('.custom-options');
  console.log("dw")
  if (ul.style.display === 'block') {
      ul.style.display =   'none';
  } else {
      ul.style.display ='block';
  } 
}
window.addEventListener('click',selection)
let list=[a,b,c]
function selection() {
  const customOptions = document.querySelectorAll('.form .custom-options li');
  const input = document.querySelector('.form .custom-input input').value.trim(); // Get the input value and trim whitespace
  console.log(input,customOptions)
  customOptions.forEach(function (customOption) {
    const optionValue = customOption.getAttribute('data-value').toLowerCase(); // Get the data-value attribute and convert to lowercase for case-insensitive comparison

    if (input && optionValue.includes(input.toLowerCase())) {
      customOption.style.display = 'block';
    } else {
      customOption.style.display = 'none';
    }
  });
}


