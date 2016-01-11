// function that shows definition
var checkState = true;
$(function() {
  $(".title").click(function() {
    $(this).next().slideToggle();
    if (checkState) {
      $(this).prev().animate({  borderSpacing: -90 }, {
        step: function() {
          $(this).css('-webkit-transform','rotate(90deg)');
          $(this).css('-moz-transform','rotate(90deg)');
          $(this).css('transform','rotate(90deg)');
        },
        duration:'slow'
      });
      checkState = false;
    }else {
      console.log("negaitve 90"+checkState)
      $(this).prev().animate({  borderSpacing: -90 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(0deg)');
          $(this).css('-moz-transform','rotate(0deg)');
          $(this).css('transform','rotate(0deg)');
        },
        duration:'slow'
      });
      checkState = true;
    }
  });
});
