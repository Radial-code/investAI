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

// timer
function CountDownTimer() {
  left_days = document.getElementById("days");
  left_hours = document.getElementById("hours");
  left_minutes = document.getElementById("minutes");
  left_seconds = document.getElementById("seconds");
}
function showRemaining() {
  now = new Date();

  days = (6 - now.getDay()).toString().padStart(2, "0");
  hours = (23 - now.getHours()).toString().padStart(2, "0");
  minutes = (59 - now.getMinutes()).toString().padStart(2, "0");
  seconds = (59 - now.getSeconds()).toString().padStart(2, "0");
  left_days.innerHTML = days;
  left_hours.innerHTML = hours;
  left_minutes.innerHTML = minutes;
  left_seconds.innerHTML = seconds;
}

timer = setInterval(showRemaining, 1000);
CountDownTimer();
