$(document).ready(function () {
    $(".icon.open").click(function (e) { 
        e.preventDefault();
        $(".top-header").addClass("toggle");
    });
    $(".icon.close").click(function (e) { 
        e.preventDefault();
        $(".top-header").removeClass("toggle");
    });


    //Back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
    
      $('#back-to-top').click(function() {
        $("html, body").animate({
          scrollTop: 0
        }, 1000);
        return false;
      });
});