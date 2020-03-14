module.exports = function(grunt){
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src :' ./baidu.html',
                dest:'dist/baidu.html'
            }
        },
        cssmin:{
            'baidu.min.css':"baidu.css"
        },
        uglify:{
            'baidu.min.js':'baidu.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['htmlmin','cssmin','uglify']);

}