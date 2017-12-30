
module.exports = (grunt: IGrunt) => {

    grunt.config('clean', {
        dist: ['dist/**/*'],
        build: ['build/**/*']
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
};