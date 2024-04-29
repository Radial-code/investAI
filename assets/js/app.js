// nav bar
const navigation = document.getElementById("nav");
const changeButton = document.getElementById("toggle_menu");

function toggleNavigationMenu() {
  navigation.classList.toggle("show");
  document.body.classList.toggle("overflow_hidden");
  changeButton.classList.toggle("toggle_change");
}

// slider hero
$(".hero_slider").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 8000,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.8,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
      },
    },
  ],
});

// understanding slider
$(".understanding_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  autoplay: true,
  infinite: true,
  dots: false,
  nextArrow: ".left_arrow",
  prevArrow: ".right_arrow",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        dots: true,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});
// slider hero
$(".advisors_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  autoplay: true,
  infinite: true,
  dots: false,
  nextArrow: ".left_arrow",
  prevArrow: ".right_arrow",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
// partner-slider
$(".partner_slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  arrows: false,
  dots: false,
  infinite: true,
  speed: 8000,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.6,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Form validation
// Function to validate form inputs
function validateForm(
  formId,
  firstNameId,
  lastNameId,
  emailId,
  phoneId,
  firstNameErrorId,
  lastNameErrorId,
  emailErrorId,
  phoneErrorId
) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((message) => (message.textContent = ""));

    // Get form inputs
    const firstName = document.getElementById(firstNameId).value.trim();
    const lastName = document.getElementById(lastNameId).value.trim();
    const email = document.getElementById(emailId).value.trim();
    const phoneNumber = document.getElementById(phoneId).value.trim();

    // Validate inputs
    let isValid = true; // Track overall validation status

    if (firstName === "") {
      document.getElementById(firstNameErrorId).textContent =
        "Please enter your first name.";
      isValid = false;
    }

    if (lastName === "") {
      document.getElementById(lastNameErrorId).textContent =
        "Please enter your last name.";
      isValid = false;
    }

    if (email === "") {
      document.getElementById(emailErrorId).textContent =
        "Please enter your email address.";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById(emailErrorId).textContent =
        "Please enter a valid email address.";
      isValid = false;
    }

    if (phoneNumber === "") {
      document.getElementById(phoneErrorId).textContent =
        "Please enter your phone number.";
      isValid = false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      document.getElementById(phoneErrorId).textContent =
        "Please enter a valid phone number.";
      isValid = false;
    }

    // If all inputs are valid, submit the form
    if (isValid) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        timer: 1500,
      });
      // Reset the form
      form.reset();
    }
  });
}

// Call validateForm function for each form
validateForm(
  "signupForm",
  "firstName",
  "lastName",
  "email",
  "phoneNumber",
  "firstNameError",
  "lastNameError",
  "emailError",
  "phoneNumberError"
);
validateForm(
  "signupFormtwo",
  "firstNametwo",
  "lastNametwo",
  "emailtwo",
  "phoneNumbertwo",
  "firstNameErrortwo",
  "lastNameErrortwo",
  "emailErrortwo",
  "phoneNumberErrortwo"
);

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phoneNumber);
}

 // Set the date we're counting down to
      var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Iterate over each countdown container
        document
          .querySelectorAll(".countdown-container")
          .forEach(function (container) {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (3800 * 60 * 60 * 24));
            var hours = Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
            );
            var minutes = Math.floor(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in elements inside this container
            container.querySelector(".days").innerHTML = days + " ";
            container.querySelector(".hours").innerHTML = hours + "";
            container.querySelector(".minutes").innerHTML = minutes + " ";
            container.querySelector(".seconds").innerHTML = seconds + " ";
          });

        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(x);
          document
            .querySelectorAll(".countdown-container")
            .forEach(function (container) {
              container.innerHTML = "EXPIRED";
            });
        }
      }, 1000);

      // page resize window reload

      window.addEventListener("resize", function () {
        location.reload();
      }); 