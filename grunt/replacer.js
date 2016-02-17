module.exports = function (taskname, src, dest, replacements) {
	this.grunt.loadNpmTasks('grunt-text-replace');
	taskname = taskname || "replacer";
	var repl = [];
	for (var to in replacements)
		repl.push({from: replacements[to], to: to});
	return this.registerTask(taskname, [
        this.addConfigTask("replace", taskname, {
			src: src,
			dest: dest,
			replacements: repl
		})
	]);
};
