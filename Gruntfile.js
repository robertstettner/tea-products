module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            appJS: {
                options: {
                    baseUrl: "public/js/app",
                    wrap: true,
                    wrapShim: true,
                    // Cannot use almond since it does not currently appear to support requireJS's config-map
                    name: "../libs/almond",
                    preserveLicenseComments: false,
                    optimize: "uglify2",
                    generateSourceMaps: true,
                    mainConfigFile: "public/js/app/config/config.js",
                    include: ["init/Init"],
                    out: "public/js/app/init/Init.min.js"
                }
            },
            appCSS: {
                options: {
                    optimizeCss: "standard",
                    cssIn: "./public/css/main.css",
                    out: "./public/css/main.min.css"
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['requirejs:appJS', 'requirejs:appCSS']);
    grunt.registerTask('default', ['test', 'build']);
};
