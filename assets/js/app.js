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
