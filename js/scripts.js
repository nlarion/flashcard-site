// function that shows definition
$(function() {
  $(".title").click(function() {
    $(this).next().slideToggle();
    $(this).prev().animate({  borderSpacing: -90 }, {
      step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+now+'deg)');
        $(this).css('-moz-transform','rotate('+now+'deg)');
        $(this).css('transform','rotate('+now+'deg)');
      },
      duration:'slow'
    });
  });
});
