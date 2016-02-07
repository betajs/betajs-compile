module.exports = function (taskname, test) {
	this.grunt.loadNpmTasks('grunt-shell');
	taskname = taskname || "browserqunit";
	return this.registerTask(taskname, [
		this.addConfigTask("shell", taskname, {
			command: "open " + test
		})
	]);
};