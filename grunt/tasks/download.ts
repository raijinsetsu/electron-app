
import * as download from 'electron-download';

module.exports = (grunt: IGrunt) => {

    grunt.registerTask('download', function () {

        const async = this.async();
        download({
            version: grunt.config.get('pkg.electronVersion'),
            cache: grunt.config.get('pkg.zipCache')
        }, (err: any, zipPath: string) => {

            console.log(zipPath);
            if (!err) {
                grunt.config.set('electronZipPath', zipPath);
                grunt.task.run('unzip:electron');
            }
            async(err);
        });
    });
};
