var inner = $('.nav-inner');
var container = $('.nav-side-container');

container.on('click | touchend', function(){
    if ($(this).hasClass('open')) {
        inner.animate({'height':'0','width':'0','opacity':'0'},160);
    } else {
        inner.animate({'height':'100%','width':'200px','opacity':'1'},160);
    }
    $(this).toggleClass('open');
    return false;
});

$('.nav-inner-li').on('click | touchend', function(){
    if (container.hasClass('open')) {
        inner.animate({'height':'0','width':'0','opacity':'0'},160);
    }
    container.removeClass('open');
});

