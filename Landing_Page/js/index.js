$(function() {
    
    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});

/* JQuery */
$(document).ready(function(){
    $('.header').height($(window).height());
    
   })

/* End JQuery */