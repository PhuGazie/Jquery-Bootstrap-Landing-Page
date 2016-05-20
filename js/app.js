$(document).ready(function(){
  new WOW().init();
  $('body').scrollspy({ target: '#mainNav' })


  //adding a scroll event, creating a variable for the distance
  $(window).on("scroll", function() {
      var scrollDistance = $(window).scrollTop();

      if (scrollDistance > 50 ) {
        $("#mainNav")
          .removeClass('affix-top')
          .addClass('affix')
      } else {
        $("#mainNav")
          .addClass('affix-top')
          .removeClass('affix')
      }
  });

  $(document).on("click", ".page-scroll", function(event){
    event.preventDefault()
    var AnchorTag = $(this).attr("href")
    $("body").animate({
      scrollTop: $(AnchorTag).offset().top

    }, 700);
  });

  $(document).on("mouseenter", "fa", function(){
    $(this).addClass("swing");
  });


});
