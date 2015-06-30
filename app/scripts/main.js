(function($) {

    'use strict'; 

    $('#about, #mind-escape').find('p, img').hide();
    // $('#mind-escape').find('p, img').hide();

    $('.wrapper').fullpage({
        'onLeave': function(index, nextIndex) {
            if (index === 1 && nextIndex === 2 && !$('#about img').hasClass('animated')) {
                $('#about').find('p, img').fadeIn(500).addClass('animated flip');
                
                setTimeout(function() {
                    BigBlackCodeEffect.begin();
                    $('#about img').removeClass('flip').addClass('infinite pulse');
                }, 2000);

            } else if (index === 2 && nextIndex === 3) {

                setTimeout(function() {
                    $('#mind-escape').find('p, img').fadeIn(500).addClass('animated flip');
                    MindEscapeEffect.begin();
                }, 500);
                
            }
        }
    });

    $('section').css('height', ''); // * section js height fix

})(jQuery); 