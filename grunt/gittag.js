module.exports = function (taskname) {
    taskname = taskname || "gittag";
    var pkg = this.pkg;
    return this.registerTask(taskname, function () {
        var current = "v";
        pkg.version.split(".").forEach(function (part) {
            current += part;
            require('child_process').execSync("git tag " + current + " --force");
            current += ".";
        });
    });
};
