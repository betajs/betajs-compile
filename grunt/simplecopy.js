module.exports = function (taskname, files) {
	this.grunt.loadNpmTasks('grunt-contrib-copy');
	taskname = taskname || "simplecopy";
	var mapped = [];
	var process = function (target, source) {
		var targetPath = target.split("/");
		targetPath.pop();
		targetPath = targetPath.join("/");
		var sourcePath = source.split("/");
		var sourceFile = sourcePath.pop();
		sourcePath = sourcePath.join("/");
		mapped.push({
			expand: true,
			cwd: sourcePath,
			src: sourceFile,
			dest: targetPath,
			rename: function (dest, src) {
				return target;
			}
		});
	};
	for (var target in files)
		process(target, files[target]);
	return this.registerTask(taskname, [
		this.addConfigTask("copy", taskname, {
			files: mapped
		})
	]);
};
