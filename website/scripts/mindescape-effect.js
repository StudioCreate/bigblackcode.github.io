

window.MindEscapeEffect = window.MindEscapeEffect || {};


(function(exports) {
    'use strict';

    var canvas,
        ctx,
        img, 
        objects;

    var _createInstance = function() {
        var inst = {
            cx: Math.random() * canvas.width, 
            cy: canvas.height + img.height + 20,
            velocity: Math.random() * 3 + 1,
            scale: Math.random(),

            draw: function() {
                ctx.save();

                ctx.drawImage(img, inst.cx - img.width / 2, inst.cy - img.height / 2, img.width * inst.scale, img.height * inst.scale);    

                inst.cy -= inst.velocity;

                ctx.restore();
            },

            destroy: function() {
                return (inst.cy < 0);
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

        objects.forEach(function(obj) {
            obj.draw();
        });

        objects.forEach(function(obj, index) {
           if (obj.destroy()) {
               objects.splice(index, 1);
           }
       });

        // Animation Loop at 60 FPS
        setTimeout(function() {
            requestAnimationFrame(_animate);     
        }, 1000 / 30); 
    };

    exports.begin = function() {
        var $canvas = $('<canvas/>');

        $canvas
        .attr({
            'id': 'mindescape-canvas',
            'width': window.innerWidth,
            'height': window.innerHeight
        })
        .prependTo('#mindescape');

        canvas = $canvas.get(0);
        ctx = canvas.getContext('2d');
        objects = [];
        img = new Image(); 
        img.src = 'images/question-mark.png';

        _animate();          
    };

})(window.MindEscapeEffect);