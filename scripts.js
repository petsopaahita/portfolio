$(document).ready(function(){
  $(".hero_list1").click(function(){
    $(".hero").fadeOut(1);
    $(".hero2").fadeOut(1);
    $(".menubar").fadeIn(1000);
    $(".header").fadeOut(1);
    $(".projects").fadeIn(1000);
    $('#particles-js').css('transform', 'scale(5)');
    $("#particles-js").fadeToggle(1000);
    $("#particles-js").removeClass("clicked");
    $(".menubar").css("display", "flex");
    });
 });
$(document).ready(function(){
  $(".hero_list2").click(function(){
    $(".hero").fadeOut(1);
    $(".hero2").fadeOut(1);
    $(".menubar").fadeIn(1000);
    $(".header").fadeOut(1);   
    $(".profile").fadeIn(1000);
    $('#particles-js').css('transform', 'scale(5)');
    $("#particles-js").fadeToggle(1000);
    $("#particles-js").removeClass("clicked");
    $(".menubar").css("display", "flex");
    });
 });
$(document).ready(function(){
  $(".hero_list3").click(function(){
    $(".hero").fadeOut(1);
    $(".hero2").fadeOut(1);
    $(".menubar").fadeIn(1000);
    $(".header").fadeOut(1);      
    $(".contact").fadeIn(1000);
    $('#particles-js').css('transform', 'scale(5)');
    $("#particles-js").fadeToggle(1000);
    $("#particles-js").removeClass("clicked");
    $(".menubar").css("display", "flex");
    });
});
$(document).ready(function(){
  $(".menubar-home, .xpnd_menu-home").click(function(){
    $(".hero, .hero2, .header").stop(true, false).fadeIn(1000);
    $(".projects, .profile, .contact, .menubar, .xpnd_menu").fadeOut(1);
    $("#particles-js").addClass("clicked");
    $("#particles-js").fadeIn(2000);
    $('#particles-js').css('transform', 'scale(1)');
    $("#main").css("z-index", "2");
    $("#main").animate({ opacity: 1 }, 1000);
  });
});
$(document).ready(function(){
  $(".menubar1, .menubar-list1").click(function(){
    $(".xpnd_menu, .profile, .contact").stop(true, false).fadeOut(1);
    $(".projects, .menubar").fadeIn(2000);
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function(){
  $(".menubar2, .menubar-list2").click(function(){
    $(".xpnd_menu, .projects, .contact").stop(true, false).fadeOut(1);
    $(".profile, .menubar").fadeIn(2000);
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function(){
  $(".menubar3, .menubar-list3").click(function(){
    $(".xpnd_menu, .projects, .profile").stop(true, false).fadeOut(1);
    $(".contact, .menubar").fadeIn(2000);
    $(".menubar").css("display", "flex");
    $("#main").animate({ opacity: 100 }, 2000);
  });
});
$(document).ready(function(){
  $("#menu_1").click(function(){
    $("#xpnd_menu1").stop(true, false).fadeIn(500);
    $("#xpnd_menu1").css("display", "flex");
    $("#main").stop().animate({ opacity: 0.01 }, 1000);
    $("#particles-js-2").stop().animate({ opacity: 0.10 }, 1000);
  });
});
