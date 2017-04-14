$(document).ready(function(){

  $(function() {
      $(".window").draggable({ handle: ".bar" });
  });

  var bar = $('.bar');

  bar.mousedown(function(){
      bar.parent('.window').removeClass('z-3 drag');
      $(this).parent('.window').addClass('z-3 drag');
  });

  bar.mouseup(function(){
    bar.parent('.window').removeClass('drag');
  });

  var about = $('.about');
  var close = $('.close');
  var star = $('.star');
  var intro = $('.intro');
  var content = $('.content');
  var starsvg = $('.star svg');
  var body = $('body');

  function open_about(){
    if (body.hasClass('open')){
      body.removeClass('open');
      star.removeClass('open');
      starsvg.removeClass('open');
      content.removeClass('open');
      setTimeout(function(){
        intro.removeClass('open');
      }, 450);
      setTimeout(function(){
        star.css('opacity', '0').css('z-index', '0').css('transform', 'translateX(-100%)');
        close.css('transform', 'translateY(-200%) rotate(30deg)');
      }, 800);
    } else {
      close.css('transform', 'translateY(0) rotate(30deg)');
      star.css('opacity', '1').css('z-index', '5').css('transform', 'translateX(0)');
      body.addClass('open');
      starsvg.addClass('open');
      setTimeout(function(){
        star.addClass('open');
      }, 800);
      setTimeout(function(){
        intro.addClass('open');
        content.addClass('open');
      }, 100);
    }
  };

  about.click(function(){
    open_about()
  });

  close.click(function(){
    open_about();
  });

  Marquee3k({
    spacing: 12
  });

  placeholder = $('.placeholder');

  placeholder.click(function(){
    placeholderSrc = $(this).attr('data-src');
    $(this).siblings('iframe').attr('src', placeholderSrc);
    $(this).fadeOut();
  });
})
