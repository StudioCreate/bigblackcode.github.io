(function($) {

    'use strict'; 

    $('#about, #mind-escape').find('p, img').hide();
    // $('#mind-escape').find('p, img').hide();

    $('.wrapper').fullpage({
        'onLeave': function(index, nextIndex) {
            if (index === 1 && nextIndex === 2 && !$('#about img').hasClass('animated')) {
                
                setTimeout(function() {
                    $('#about').find('p, img').fadeIn(500).addClass('animated flip');
                    BigBlackCodeEffect();
                }, 500);

            } else if (index === 2 && nextIndex === 3) {

                setTimeout(function() {
                    $('#mind-escape').find('p, img').fadeIn(500).addClass('animated flip');
                    MindEscapeEffect();
                }, 500);
                
            }
        }
    });

    $('section').css('height', ''); // * section js height fix


    var BigBlackCodeEffect = function() {
        var $canvas = $('<canvas/>'); 

        $canvas
            .attr({
                'id': 'about-canvas',
                'width': window.innerWidth,
                'height': window.innerHeight
            })
            .prependTo('#about');

        var canvas = $canvas.get(0),
            ctx = canvas.getContext('2d'),
            logo = $('#about img').get(0),
            objects = []; 

        function Logo() {
            this.cx = (canvas.width / 2) + Math.floor((Math.random() * canvas.width / 2) - canvas.width / 4);
            this.cy = (canvas.height / 2) + Math.floor((Math.random() * canvas.height / 2) - canvas.height / 4);
            this.scale = 0; 
            this.opacity = 1;
            this.rotate = 0;

            this.draw = function() {
                ctx.save(); 

                // Rotate Object
                ctx.translate(this.cx, this.cy);
                ctx.rotate(this.rotate);
                
                // Draw Object
                ctx.globalAlpha = this.opacity; 
                ctx.drawImage(logo, -logo.width * this.scale / 2, -logo.height * this.scale / 2, 
                    logo.width * this.scale, logo.height  * this.scale);
                
                // Process Variables
                this.opacity -= 0.02;
                this.scale += 0.02; 
                this.rotate += 0.1;

                ctx.restore();
            };

            this.destroy = function() {
                return (this.opacity <= 0.15);
            };
        }

        var animate = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 80% chance to create a new logo
            if ((Math.random() * 100) > 70 && objects.length < 50) {
                objects.push(new Logo()); 
            }  
                

            $.each(objects, function(index, obj) {
                if (obj)
                    obj.draw(); 
            });

            $.each(objects, function(index, obj) {
                if (obj && obj.destroy())
                    objects.splice(index, 1);
            })

            // Animation Loop at 60 FPS
            setTimeout(function() {
                requestAnimationFrame(animate);     
            }, 1000 / 60); 
        };


        animate();

    };


    var MindEscapeEffect = function() { 
        console.log('MindEscapeEffect is not implemented yet.');
    }; 

})(jQuery); 