$(document).ready(function(){
  $(".hero_list1").click(function(){
      $(".hero").fadeOut(1000);
      $(".menubar").fadeToggle(3000);
      $(".projects").fadeIn(3000);
      $('#particles-js').css('transform', 'scale(5)');
      $("#particles-js").fadeToggle(1000);
      $("#particles-js").removeClass("clicked");
    });
 });
 
 $(document).ready(function(){
  $(".backbtn").click(function(){
       $(".projects").fadeOut(1000);
       $(".menubar").fadeOut(1000);
       $(".hero").fadeIn(1000);
       $("#particles-js").addClass("clicked");
       $("#particles-js").fadeIn(1000);
       $('#particles-js').css('transform', 'scale(1)');
       $("#main").css("z-index", "2");
    });
 });

 var heroList1 = document.querySelector('.hero_list1');
 heroList1.addEventListener('click', function() {
 particlesJS.stop('particles-js');

 var newConfig = {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00ff00"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 100,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
};

particlesJS('particles-js', newConfig);
});