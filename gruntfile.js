module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
            'assets/script.min.js': [
              'assets/*.js'
            ]
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'assets/styles.min.css': [
            'assets/*.css'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  
  grunt.registerTask('default', ['uglify', 'cssmin']);
};