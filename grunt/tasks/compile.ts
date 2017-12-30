
module.exports = (grunt: IGrunt) => {

    grunt.config('ts', {
        app: {
            tsconfig: {
                tsconfig: 'src/tsconfig.json',
                passthrough: true
            }
        }
    });
    grunt.registerTask('compile', 'Compile the typescript code.', ['ts']);
    grunt.loadNpmTasks('grunt-ts');
};
