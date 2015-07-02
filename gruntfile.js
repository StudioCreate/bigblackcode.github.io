module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: true    
            },            
            build: [ 'website/scripts/**.js', '!website/scripts/tiltfx.js' ]
        },

        wiredep: {
            dev: {
                src: [ 'website/index.html' ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-wiredep'); 

    grunt.registerTask('default', ['jshint:build'])
};