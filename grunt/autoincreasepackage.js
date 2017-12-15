module.exports = function (taskname, pkgname) {
	taskname = taskname || "autoincreasepackage";
	pkgname = pkgname || "package.json";
	var grunt = this.grunt;
	return this.registerTask(taskname, function () {
		var current = grunt.file.readJSON(pkgname);
		var last = JSON.parse(require('child_process').execSync("git show HEAD:" + pkgname) + "");
		if (current.version === last.version) {
			var version = current.version.split(".");
			var revision = parseInt(version.pop(), 10);
			revision += 1;
			version.push(revision + "");
			current.version = version.join(".");
            grunt.file.write(pkgname, JSON.stringify(current, "", 4));
		}
	});
};
