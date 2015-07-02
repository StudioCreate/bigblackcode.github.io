(function($) {

    'use strict'; 

    $('#bigblackcode, #mindescape').find('p, img').hide();

    $('.wrapper').fullpage({
        'onLeave': function(index, nextIndex) {
            if (index === 1 && nextIndex === 2 && !$('#bigblackcode img').hasClass('animated')) {
                $('#bigblackcode').find('p, img').fadeIn(500).addClass('animated flip');
                
                setTimeout(function() {
                    window.BigBlackCodeEffect.begin();
                    $('#bigblackcode img').removeClass('flip').addClass('infinite pulse');
                }, 2000);

            } else if (index === 2 && nextIndex === 3 && !$('#mindescape img').hasClass('animated')) {
                $('#mindescape').find('p, img').fadeIn(500).addClass('animated flip');
                setTimeout(function() {
                    window.MindEscapeEffect.begin();
                    $('#mindescape img').removeClass('flip').addClass('infinite pulse');
                }, 2000);
            }
        }
    });

    $('section').css('height', ''); // * section js height fix

})(jQuery); 