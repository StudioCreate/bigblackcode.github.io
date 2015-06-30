
window.BigBlackCodeEffect = window.BigBlackCodeEffect || {};

(function(exports) {

    var canvas,
    ctx, 
    logo,
    objects;

    var _createInstance = function() {

        var inst = {
            cx: Math.random() * canvas.width, 
            cy: Math.random() * canvas.height,
            scale: 0,
            opacity: 1, 
            rotate: 0,
            direction: ((Math.random() - 0.5) > 0) ? 1 : -1,
            
            draw: function() {

                ctx.save(); 

                // Rotate Object
                ctx.translate(inst.cx, inst.cy);
                ctx.rotate(inst.rotate);
                
                // Draw Object
                ctx.globalAlpha = inst.opacity; 
                ctx.drawImage(logo, -logo.width * inst.scale / 2, -logo.height * inst.scale / 2, 
                    logo.width * inst.scale, logo.height  * inst.scale);
                
                // Process Variables
                inst.opacity -= 0.05;
                inst.scale += 0.01; 
                inst.rotate += inst.direction * 0.3;

                ctx.restore();

            },

            destroy: function() {
                return (inst.opacity <= 0.05);
            }
        };

        return inst;
    };


    var _animate = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        // 25% chance to create a new logo
        if ((Math.random() * 100) > 25 && objects.length < 100) {
            objects.push(_createInstance()); 
        }  

        objects.forEach(function(obj, index) {
            obj.draw();
        });

        objects.forEach(function(obj, index) {
           if (obj.destroy())
               objects.splice(index, 1);
       });

        // Animation Loop at 60 FPS
        setTimeout(function() {
            requestAnimationFrame(_animate);     
        }, 1000 / 30); 
    };


    exports.begin = function() {
        var $canvas = $('<canvas/>')

        $canvas
        .attr({
            'id': 'about-canvas',
            'width': window.innerWidth,
            'height': window.innerHeight
        })
        .prependTo('#about');

        canvas = $canvas.get(0);
        logo = $('#about img').get(0);
        ctx = canvas.getContext('2d');
        objects = [];

        _animate(); 
    };

})(window.BigBlackCodeEffect); 