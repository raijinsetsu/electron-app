import { readFileSync } from "fs";

module.exports = (grunt: IGrunt) => {

    grunt.initConfig({ pkg: JSON.parse(readFileSync('package.json', 'utf8')) });
    grunt.loadTasks('tasks');
};