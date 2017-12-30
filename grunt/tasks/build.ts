
module.exports = (grunt: IGrunt) => {

    grunt.registerTask('build', 'Build the application.', ['lint', 'compile']);
};