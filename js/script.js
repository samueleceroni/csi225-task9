jQuery(document).ready(function ($) {
    $('#prepend-btn').on('click', function(){
        const textToPrepend = $('#prepend-text').val();
        if( textToPrepend ){
            $('div#tasks').prepend("<p>" + textToPrepend + "</p>");
        }
    })
});