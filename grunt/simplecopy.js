module.exports = function (taskname, files) {
	this.grunt.loadNpmTasks('grunt-contrib-copy');
	taskname = taskname || "simplecopy";
	var mapped = [];
	for (var target in files) {
		var targetPath = target.split("/");
		targetPath.pop();
		targetPath = targetPath.join("/");
		var source = files[target];
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
	}
	return this.registerTask(taskname, [
		this.addConfigTask("copy", taskname, {
			files: mapped
		})
	]);
};
