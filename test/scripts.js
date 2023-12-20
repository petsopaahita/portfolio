$(document).ready(function(){
    $(".hero_list1").click(function(){
       $(".hero").fadeOut(1000);
       $(".menubar").fadeToggle(3000);
       $(".projects").fadeIn(3000);
       $("#main").css("background-image", "url('')");
   });
   });

 $(document).ready(function(){
   $(".backbtn").click(function(){
       $(".projects").fadeOut(1000);
       $(".menubar").fadeOut(1000);
       $(".hero").fadeIn(1000);
       $("#main").css("background-image", "");
   });
   });

 

