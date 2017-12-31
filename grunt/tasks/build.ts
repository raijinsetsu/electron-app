
import * as asar from 'asar';
import * as path from 'path';

module.exports = (grunt: IGrunt) => {

    grunt.registerTask('archive', function () {
        const async = this.async();
        asar.createPackage('build', path.join('dist', 'resources', 'app.asar'), (err) => async(err));
    });
    grunt.registerTask('build', 'Build the application.', ['clean', 'lint', 'compile', 'archive', 'download', 'decompress']);
};