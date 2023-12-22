$(document).ready(function(){
  $(".hero_list1").click(function(){
      $(".hero").fadeOut(1000);
      $(".menubar").fadeIn(3000);
      $(".projects").fadeIn(3000);
      $('#particles-js').css('transform', 'scale(5)');
      $("#particles-js").fadeToggle(1000);
      $("#particles-js").removeClass("clicked");
    });
 });
$(document).ready(function(){
  $(".hero_list2").click(function(){
      $(".hero").fadeOut(1000);
      $(".menubar").fadeIn(3000);
      $(".profile").fadeIn(3000);
      $('#particles-js').css('transform', 'scale(5)');
      $("#particles-js").fadeToggle(1000);
      $("#particles-js").removeClass("clicked");
    });
 });
 $(document).ready(function(){
   $(".hero_list3").click(function(){
       $(".hero").fadeOut(1000);
       $(".menubar").fadeIn(3000);
       $(".contact").fadeIn(3000);
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