// function that shows definition

$(function() {
  $(".title").click(function() {
    $(this).next().slideToggle();
    if ($(this).prev().css('transform') == 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'){
      //console.log("true")
      $(this).prev().animate({  borderSpacing: -90 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(0deg)');
          $(this).css('-moz-transform','rotate(0deg)');
          $(this).css('transform','rotate(0deg)');
        },
        duration:'slow'
      });
    } else{
      $(this).prev().animate({  borderSpacing: -90 }, {
        step: function() {
          $(this).css('-webkit-transform','rotate(90deg)');
          $(this).css('-moz-transform','rotate(90deg)');
          $(this).css('transform','rotate(90deg)');
        },
        duration:'slow'
      });
    }
  });
});
