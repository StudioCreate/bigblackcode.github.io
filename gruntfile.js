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
        },

        clean: {
            build: [ 'dist' ]
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true, cwd: 'website/', src: ['**'], dest: 'dist'
                    }
                ]
            }
        },

        useminPrepare: {
            html: 'website/index.html',
            options: {
                dest: 'dist'
            }
        }, 


        filerev: {
            build: {
                src: [ 'dist/styles/**', 'dist/scripts/**' ]
            }
        },

        usemin: {
            html: 'dist/index.html'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean'); 
    grunt.loadNpmTasks('grunt-contrib-copy'); 
    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-filerev'); 
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-wiredep'); 
    grunt.loadNpmTasks('grunt-usemin'); 

    grunt.registerTask('default', [
        'jshint:build', 
        'clean:build', 
        'copy:build',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);
};