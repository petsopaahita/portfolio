$(document).ready(function(){
  $(".hero_list1").click(function(){
      $(".hero").fadeOut(1000);
      $(".menubar").fadeIn(2000);
      $(".menubar1").hide(0);
      $(".menubar2").show(0);
      $(".menubar3").show(0);
      $(".projects").fadeIn(2000);
      $('#particles-js').css('transform', 'scale(5)');
      $("#particles-js").fadeToggle(1000);
      $("#particles-js").removeClass("clicked");
    });
 });
$(document).ready(function(){
  $(".hero_list2").click(function(){
      $(".hero").fadeOut(1000);
      $(".menubar").fadeIn(2000);
      $(".menubar1").show(0);
      $(".menubar2").hide(0);
      $(".menubar3").show(0);      
      $(".profile").fadeIn(2000);
      $('#particles-js').css('transform', 'scale(5)');
      $("#particles-js").fadeToggle(1000);
      $("#particles-js").removeClass("clicked");
    });
 });
 $(document).ready(function(){
   $(".hero_list3").click(function(){
       $(".hero").fadeOut(1000);
       $(".menubar").fadeIn(2000);
       $(".menubar1").show(0);
       $(".menubar2").show(0);
       $(".menubar3").hide(0);       
       $(".contact").fadeIn(2000);
       $('#particles-js').css('transform', 'scale(5)');
       $("#particles-js").fadeToggle(1000);
       $("#particles-js").removeClass("clicked");
     });
  });
 $(document).ready(function(){
  $(".backbtn").click(function(){
       $(".projects, .profile, .contact").fadeOut(1);
       $(".menubar").fadeOut(1);
       $(".hero").fadeIn(1000);
       $("#particles-js").addClass("clicked");
       $("#particles-js").fadeIn(2000);
       $('#particles-js').css('transform', 'scale(1)');
       $("#main").css("z-index", "2");
    });
 });
 $(document).ready(function(){
  $(".menubar1").click(function(){
    $(".menubar1").hide(0);
    $(".menubar2").show(0);
    $(".menubar3").show(0);
    $(".projects").fadeIn(2000);
    $(".profile, .contact").fadeOut(1);
    $(".menubar").fadeOut(1, function(){
      $(".menubar").fadeIn(2000);
    });
    });
 });
 $(document).ready(function(){
  $(".menubar2").click(function(){
    $(".menubar1").show(0);
    $(".menubar2").hide(0);
    $(".menubar3").show(0);
    $(".profile").fadeIn(3000);
    $(".projects, .contact").fadeOut(1);
    $(".menubar").fadeOut(1, function(){
      $(".menubar").fadeIn(3000);
    });
    });
 });
 $(document).ready(function(){
  $(".menubar3").click(function(){
    $(".menubar1").show(0);
    $(".menubar2").show(0);
    $(".menubar3").hide(0);
    $(".contact").fadeIn(3000);
    $(".projects, .profile").fadeOut(1);
    $(".menubar").fadeOut(1, function(){
      $(".menubar").fadeIn(3000);
    });
    });
 });



