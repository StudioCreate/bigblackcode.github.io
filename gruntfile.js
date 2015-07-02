module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: true    
            },            
            build: [ 'website/scripts/**.js', '!website/scripts/tiltfx.js' ]
        }


    });

    grunt.loadNpmTasks('grunt-contrib-jshint'); 

    grunt.registerTask('default', ['jshint:build'])
};