$(document).ready(function () {
  $(".hero_list1, #xpnd1-itm1").click(function () {
    $(".hero, .hero2, .header, #xpnd_menu1").stop(true, false).fadeOut(1);
    $(".menubar, .projects").fadeIn(1000);
    $("#particles-js").css("transform", "scale(5)");
    $("#particles-js").fadeToggle(1000);
    $("#particles-js").removeClass("clicked");
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function () {
  $(".hero_list2, #xpnd1-itm2").click(function () {
    $(".hero, .hero2, .header, #xpnd_menu1").stop(true, false).fadeOut(1);
    $(".menubar, .profile").fadeIn(1000);
    $("#particles-js").css("transform", "scale(5)");
    $("#particles-js").fadeToggle(1000);
    $("#particles-js").removeClass("clicked");
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function () {
  $(".hero_list3, #xpnd1-itm3").click(function () {
    $(".hero, .hero2, .header, #xpnd_menu1").stop(true, false).fadeOut(1);
    $(".menubar, .contact").fadeIn(1000);
    $("#particles-js").css("transform", "scale(5)");
    $("#particles-js").fadeToggle(1000);
    $("#particles-js").removeClass("clicked");
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function () {
  $(".menubar-home, .xpnd_menu-home").click(function () {
    $(".hero, .hero2, .header").stop(true, false).fadeIn(1000);
    $(".projects, .profile, .contact, .menubar, .xpnd_menu").fadeOut(1);
    $("#particles-js").addClass("clicked");
    $("#particles-js").fadeIn(2000);
    $("#particles-js").css("transform", "scale(1)");
    $("#main").css("z-index", "2");
    $("#main").animate({ opacity: 1 }, 1000);
  });
});
$(document).ready(function () {
  $(".menubar-list1, #xpnd2-itm1").click(function () {
    $(".xpnd_menu, .profile, .contact").stop(true, false).fadeOut(1);
    $(".projects, .menubar").fadeIn(2000);
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function () {
  $(".menubar-list2, #xpnd2-itm2").click(function () {
    $(".xpnd_menu, .projects, .contact").stop(true, false).fadeOut(1);
    $(".profile, .menubar").fadeIn(2000);
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function () {
  $(".menubar-list3, #xpnd2-itm3").click(function () {
    $(".xpnd_menu, .projects, .profile").stop(true, false).fadeOut(1);
    $(".contact, .menubar").fadeIn(2000);
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function () {
  $("#menu_1").click(function () {
    $("#xpnd_menu1").stop(true, false).fadeIn(500);
    $("#xpnd_menu1").css("display", "flex");
    $("#main").stop().animate({ opacity: 0.01 }, 1000);
  });
});
$(document).ready(function () {
  $("#menu_2").click(function () {
    $("#xpnd_menu2").stop(true, false).fadeIn(500);
    $("#xpnd_menu2").css("display", "flex");
    $("#main").stop().animate({ opacity: 0.01 }, 1000);
  });
});

//-------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    { id: "projects", menuItemClass: "menubar-list1" },
    { id: "profile", menuItemClass: "menubar-list2" },
    { id: "contact", menuItemClass: "menubar-list3" },
  ];

  const observers = sections.map((section) => {
    const sectionElement = document.getElementById(section.id);
    const menuItem = document.querySelector(`.${section.menuItemClass}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            menuItem.classList.add("highlight");
          } else {
            menuItem.classList.remove("highlight");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionElement);
    return observer;
  });
});

//--------------------------Contact Me Form-----------------------------------

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    // Allow the form to submit
    setTimeout(() => {
      // Clear the form after submission
      this.reset();
    }, 100); // Add a slight delay to ensure the form submission completes
  });
