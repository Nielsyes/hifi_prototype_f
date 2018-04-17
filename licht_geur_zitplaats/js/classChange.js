$(function(){
    $('figure').click(function(){
        $('figure.active').removeClass('active');
        $(this).addClass('active');
    });
});

$(function(){
    $('.selectBox').click(function(){
        $('.selectBox.active').removeClass('active');
        $(this).addClass('active');
    });
});