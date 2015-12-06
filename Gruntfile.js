var sassFiles = {
    'static/css/efstyle.css': 'sass/efstyle.scss'
};

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: sassFiles
            },
            dist: {
                options: {
                    style: 'compressed',
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: sassFiles
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('buildcss', ['sass:dist']);
};
