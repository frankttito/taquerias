$(".contentClass > div:gt(0)").hide();

setInterval(function() { 
  $('.contentClass > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.contentClass');
},  2000);
