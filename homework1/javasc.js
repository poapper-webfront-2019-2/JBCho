$(document).ready(function(){
    $('#lucky').click(function(){
        $('#lucky').attr('value',"I'm feeling sad");
    })
    $('#gmail,#image').hover(function(){
        $(this).css('text-decoration','underline');
    })
    $('#login').click(function(){
        $(this).css('background-color','red');
    })
    
    var mql = window.matchMedia("screen and (max-width: 500px)");

    mql.addListener(function(e) {
    if(e.matches) {
        $('.footer').remove();
    }
    });

})