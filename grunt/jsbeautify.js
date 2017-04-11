module.exports = function (taskname, files) {
    taskname = taskname || "jsbeautify";
    var pkg = this.pkg;
    return this.registerTask(taskname, function () {
        require('child_process').execSync("node_modules/js-beautify/js/bin/js-beautify.js -r -f " + files);
    });
};
