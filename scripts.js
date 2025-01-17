$(document).ready(function(){
  $(".hero_list1").click(function(){
      $(".hero").fadeOut(1);
      $(".hero2").fadeOut(250);
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
      $(".hero2").fadeOut(250);
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
       $(".hero2").fadeOut(250);
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
  $(".menu").click(function(){
    $(".xpnd_menu").fadeIn(500);
    $(".xpnd_menu").css("display", "flex");
    $("#main").stop().animate({ opacity: 0.01 }, 1000);
    $("#particles-js-2").stop().animate({ opacity: 0.10 }, 1000);
    });
 });
 $(document).ready(function(){
  $(".backbtn").click(function(){
    $(".hero, .hero2, .header").fadeIn(1000);
    $(".projects, .profile, .contact, .menubar, .xpnd_menu").fadeOut(1);
    $("#particles-js").addClass("clicked");
    $("#particles-js").fadeIn(2000);
    $('#particles-js').css('transform', 'scale(1)');
    $("#main").css("z-index", "2");
    $("#main").animate({ opacity: 1 }, 1000);
    });
 });



