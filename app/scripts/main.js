(function($) {

    'use strict'; 

    $('#about, #mind-escape').find('p, img').hide();
    // $('#mind-escape').find('p, img').hide();

    $('.wrapper').fullpage({
        'onLeave': function(index, nextIndex) {
            if (index === 1 && nextIndex === 2 && !$('#about img').hasClass('animated')) {
                
                setTimeout(function() {
                    $('#about').find('p, img').fadeIn(500).addClass('animated flip');
                }, 500);

            } else if (index === 2 && nextIndex === 3) {

                setTimeout(function() {
                    $('#mind-escape').find('p, img').fadeIn(500).addClass('animated flip');
                }, 500);
                
            }
        }
    });

    $('section').css('height', ''); // * section js height fix

})(jQuery); 