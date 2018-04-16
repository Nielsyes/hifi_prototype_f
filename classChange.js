$(function(){
    $('figure').click(function(){
        $('figure.active').removeClass('active');
        $(this).addClass('active');
    });
});