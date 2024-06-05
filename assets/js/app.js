// nav bar
const navigation = document.getElementById("nav");
const changeButton = document.getElementById("toggle_menu");
function toggleNavigationMenu() {
  navigation.classList.toggle("show");
  document.body.classList.toggle("navbar_overlay");
  changeButton.classList.toggle("toggle_change");
}
// page resize window reload

let prevWidth = window.innerWidth;

window.addEventListener("resize", function () {
  if (window.innerWidth !== prevWidth) {
    // Only reload if the width has changed
    location.reload();
  }
  prevWidth = window.innerWidth;
});
// backtotop
let mybutton = document.getElementById("back-top");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
  autoplay: true,
  autoplaySpeed: 3500,
  infinite: true,
  dots: true,
  nextArrow: ".left_arrow",
  prevArrow: ".right_arrow",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.4,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
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
$(document).ready(function () {
  $(".advisors_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
    arrows: true,
    dots: false,
    nextArrow: ".right_arrow", // Corrected selector for next arrow
    prevArrow: ".left_arrow", // Corrected selector for previous arrow
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.6,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
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
document
  .getElementById("signupFormOne")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Display SweetAlert notification
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      timer: 1500,
    }).then((result) => {
      // Reset the form after the notification is closed
      if (result.isConfirmed) {
        document.getElementById("myForm").reset();
      }
    });
  });
document
  .getElementById("signupFormTwo")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Display SweetAlert notification
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      timer: 1500,
    }).then((result) => {
      // Reset the form after the notification is closed
      if (result.isConfirmed) {
        document.getElementById("myForm").reset();
      }
    });
  });

$(document).ready(function () {
  var instance = $("[name=phone_no]").intlTelInput({
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
    initialCountry: "auto",
    separateDialCode: true,
    geoIpLookup: function (success, failure) {
      $.get("https://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "us";
        success(countryCode);
      });
    },
  });

  $("[name=phone_no]").on("blur", function () {
    var countryData = instance.intlTelInput("getSelectedCountryData");
  });
});
window.addEventListener("load", function () {
  // Change the value as per your mobile breakpoint
  AOS.init({
    once: true,
    disable: "mobile",
  });
});
// current data function
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// VIDEO IPHONE JS CODE START HERE
var video = document.getElementById("myVideo");
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
}
document
  .getElementById("signupFormTwo")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
document
  .getElementById("signupFormOne")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
  });
// Counter Animation Script
var reached = false;
$(window).scroll(function () {
  var position = $(".today_counter").offset().top;
  if ($(window).scrollTop() + $(window).height() > position && !reached) {
    startCounter();
    reached = true;
  }
});

function startCounter() {
  var counters = [0, 0, 0];
  var maxCounts = [757, 124, 4];
  var intervals = [];
  $(".text_arapawa.fs_3xl").each(function (index) {
    var $counterElement = $(this);
    var counter = 0;
    var maxCount = maxCounts[index];
    var interval = setInterval(function () {
      if (counter <= maxCount) {
        if (index === 0) {
          $counterElement.text(counter + "$");
        } else if (index === 1) {
          $counterElement.text(counter);
        } else if (index === 2) {
          $counterElement.text(counter + "x");
        }
        counter += Math.ceil(maxCount / 100);
      } else {
        clearInterval(interval);
      }
    }, 10);
    intervals.push(interval);
  });
}
