module.exports = function (taskname, src) {
	this.grunt.loadNpmTasks('grunt-benchmark');
	taskname = taskname || "benchmark";
	return this.registerTask(taskname, [
		this.addConfigTask("benchmark", taskname, {
			src: src
		})
	]);
};
