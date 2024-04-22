// nav bar
const navigation = document.getElementById("nav");
const changeButton = document.getElementById("change");

function toggleNavigationMenu() {
  navigation.classList.toggle("show");
  document.body.classList.toggle("overflow_hidden");
  changeButton.classList.toggle("change");
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
  slidesToShow: 4,
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
const form = document.getElementById("signupForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => (message.textContent = ""));

  // Get form inputs
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();

  // Validate inputs
  let isValid = true; // Track overall validation status

  if (firstName === "") {
    document.getElementById("firstNameError").textContent =
      "Please enter your first name.";
    isValid = false;
  }

  if (lastName === "") {
    document.getElementById("lastNameError").textContent =
      "Please enter your last name.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent =
      "Please enter your email address.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  if (phoneNumber === "") {
    document.getElementById("phoneNumberError").textContent =
      "Please enter your phone number.";
    isValid = false;
  } else if (!isValidPhoneNumber(phoneNumber)) {
    document.getElementById("phoneNumberError").textContent =
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

const form2 = document.getElementById("signupFormtwo");
form2.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous error messages
  const errorMessages = document.querySelectorAll(".error-messagetwo");
  errorMessages.forEach((message) => (message.textContent = ""));

  // Get form inputs
  const firstName = document.getElementById("firstNametwo").value.trim();
  const lastName = document.getElementById("lastNametwo").value.trim();
  const email = document.getElementById("emailtwo").value.trim();
  const phoneNumber = document.getElementById("phoneNumbertwo").value.trim();

  // Validate inputs
  let isValid = true; // Track overall validation status

  if (firstName === "") {
    document.getElementById("firstNameErrortwo").textContent =
      "Please enter your first name.";
    isValid = false;
  }

  if (lastName === "") {
    document.getElementById("lastNameErrortwo").textContent =
      "Please enter your last name.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailErrortwo").textContent =
      "Please enter your email address.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailErrortwo").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  if (phoneNumber === "") {
    document.getElementById("phoneNumberErrortwo").textContent =
      "Please enter your phone number.";
    isValid = false;
  } else if (!isValidPhoneNumber(phoneNumber)) {
    document.getElementById("phoneNumberErrortwo").textContent =
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
    form2.reset();
  }
});

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
