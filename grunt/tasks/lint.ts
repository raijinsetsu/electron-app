
module.exports = (grunt: IGrunt) => {

    grunt.config('tslint', {
        app: {
            src: ['src/**/*.ts', 'grunt/**/*.ts']
        }
    });
    grunt.registerTask('lint', 'Lint the source code.', ['tslint']);
    grunt.loadNpmTasks('grunt-tslint');
};