module.exports = function (taskname, files) {
	this.grunt.loadNpmTasks('grunt-contrib-copy');
	taskname = taskname || "multicopy";
	var mapped = [];
	var process = function (target, source) {
		var sourcePath = source.split("/");
		var sourceFile = sourcePath.pop();
		sourcePath = sourcePath.join("/");
		mapped.push({
			expand: true,
			cwd: sourcePath,
			src: sourceFile,
			dest: target
		});
	};
	for (var source in files)
		process(files[source], source);
	return this.registerTask(taskname, [
		this.addConfigTask("copy", taskname, {
			files: mapped
		})
	]);
};
