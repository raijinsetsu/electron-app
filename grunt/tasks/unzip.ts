
module.exports = (grunt: IGrunt) => {

    grunt.config('unzip', {
        electron: {
            src: '<% electronZipPath %>',
            dest: 'dist'
        }
    });

    grunt.loadNpmTasks('grunt-zip');
};