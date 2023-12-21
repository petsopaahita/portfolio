$(document).ready(function(){
  $(".hero_list1").click(function(){
      $(".hero").fadeOut(1000);
      $(".menubar").fadeToggle(3000);
      $(".projects").fadeIn(3000);
      $('#particles-js').css('transform', 'scale(5)');
      $("#particles-js").fadeToggle(1000);
      $("#particles-js").removeClass("clicked");
      $("#particles-js-2").fadeIn(1000);
    });
 });
 
 $(document).ready(function(){
  $(".backbtn").click(function(){
       $(".projects").fadeOut(1000);
       $(".menubar").fadeOut(1000);
       $(".hero").fadeIn(1000);
       $("#particles-js").addClass("clicked");
       $("#particles-js").fadeIn(2000);
       $('#particles-js').css('transform', 'scale(1)');
       $("#main").css("z-index", "2");
    });
 });
