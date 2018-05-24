$(document).ready(function(){
    $(".navbar-toggle").click(function(){
        $("#myNavbar").css("background", "white");
    });
})
/*======================
=========HOME===========
========================*/
$(document).ready(function(){
    $("#myCarousel").carousel();
    
    $(".item").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item").click(function(){
        $("#myCarousel").carousel(2);
    });
     

    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});
/*======================
=========OUR TEAM=======
========================*/
$(document).ready(function(){
     $("#teamCarousel").carousel();
     
     $(".left").click(function(){
        $("#teamCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#teamCarousel").carousel("next");
    });
});
/*======================
=======PORTFOLIO========
========================*/

$(document).ready(function(){
    var $isotope = $('.isotope');

    $isotope.isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
    });

    $('#filters .all').click(function(){
      var all = $(this).attr('data-filter');
      $isotope.isotope({ filter: '*' });
      return false;
    });


    $('#filters .html').click(function(){
      var html = $(this).attr('data-filter');
      $isotope.isotope({ filter: '.html' });
      return false;
    });


    $('#filters .wordpress').click(function(){
      var wordpress = $(this).attr('data-filter');
      $isotope.isotope({ filter: '.wordpress' });
      return false;
    });

    $('#filters .joomla').click(function(){
      var joomla = $(this).attr('data-filter');
      $isotope.isotope({ filter: '.joomla' });
      return false;
    });

    $('#filters .megento').click(function(){
      var megento = $(this).attr('data-filter');
      $isotope.isotope({ filter: '.megento' });
      return false;
    });
});

$(document).ready(function(){
    $('.parallax-window').parallax({imageSrc: "img/client-bg.jpg"});
});

/*======================
==========BLOG==========
========================*/
$(document).ready(function(){
    $("#blog1").click(function(){
        $("#blog1").modal({backdrop: true});
    });

     $("#blog2").click(function(){
        $("#blog2").modal({backdrop: true});
    });

      $("#blog3").click(function(){
        $("#blog3").modal({backdrop: true});
    });

      $("#blog4").click(function(){
        $("#blog4").modal({backdrop: true});
    });
    
     $("#blog5").click(function(){
        $("#blog5").modal({backdrop: true});
    });

     $("#blog6").click(function(){
        $("#blog6").modal({backdrop: true});
    });
});