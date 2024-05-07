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

// slider hero
$(".today_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1500,
  // autoplay: true,
  infinite: true,
  arrows: true,
  dots: true,
  nextArrow: ".left_arrow",
  prevArrow: ".right_arrow",
  pauseOnHover: true,
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


