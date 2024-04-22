// nav bar
const navigation = document.getElementById("nav");
const changeButton = document.getElementById("change");

function toggleNavigationMenu() {
  navigation.classList.toggle("show");
  document.body.classList.toggle("overflow_hidden");
  changeButton.classList.toggle("change");
}

//timer counter
window.addEventListener("load", (event) => {
  let clock;

  // Grab the current date
  let currentDate = new Date();

  // Target future date/24 hour time/Timezone
  let targetDate = moment.tz("2024-04-25 23:59", "New Delhi/India");

  // Calculate the difference in seconds between the future and current date
  let diff = targetDate / 1000 - currentDate.getTime() / 1000;

  if (diff <= 0) {
    // If remaining countdown is 0
    clock = ".clock".FlipClock(0, {
      clockFace: "DailyCounter",
      countdown: true,
      autostart: false,
    });
    console.log("Date has already passed!");
  } else {
    // Run countdown timer
    clock = $(".clock").FlipClock(diff, {
      clockFace: "DailyCounter",
      countdown: true,
      callbacks: {
        stop: function () {
          console.log("Timer has ended!");
        },
      },
    });

    // Check when timer reaches 0, then stop at 0
    setTimeout(function () {
      checktime();
    }, 1000);

    function checktime() {
      t = clock.getTime();
      if (t <= 0) {
        clock.setTime(0);
      }
      setTimeout(function () {
        checktime();
      }, 1000);
    }
  }
});

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

// Form validation
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  var firstName = document.getElementById("first_name");
  var lastName = document.getElementById("last_name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  var agreeCheckbox = document.getElementById("agree");
  var para1 = document.getElementById("para-1");
  var para2 = document.getElementById("para-2");
  var para3 = document.getElementById("para-3");
  var para4 = document.getElementById("para-4");
  var para5 = document.getElementById("para-5");
  var thankYouBox = document.getElementById("thankYouBox");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = firstName.value.trim();
    var last = lastName.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    var error = false;

    if (name === "") {
      error = true;
      para1.style.display = "block";
    } else {
      para1.style.display = "none";
    }

    if (last === "") {
      error = true;
      para2.style.display = "block";
    } else {
      para2.style.display = "none";
    }

    if (message === "") {
      error = true;
      para4.style.display = "block";
    } else {
      para4.style.display = "none";
    }

    if (email === "") {
      error = true;
      para3.style.display = "block";
    } else {
      para3.style.display = "none";
    }

    if (!agreeCheckbox.checked) {
      error = true;
      para5.style.display = "block";
    } else {
      para5.style.display = "none";
    }

    if (!error) {
      thankYouBox.style.display = "block";
      setTimeout(function () {
        thankYouBox.style.display = "none";
      }, 2000);
      contactForm.reset();
    }
  });
  firstName.addEventListener("input", function () {
    para1.style.display = "none";
  });

  lastName.addEventListener("input", function () {
    para2.style.display = "none";
  });

  emailInput.addEventListener("input", function () {
    para3.style.display = "none";
  });

  messageInput.addEventListener("input", function () {
    para4.style.display = "none";
  });

  function toggleSignUpForm() {
    var contactForm = document.getElementById("contactForm");
    contactForm.style.display = "block"; // or toggle the visibility as needed
  }
});
