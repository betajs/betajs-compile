module.exports = function (taskname, file) {
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "clean";
	return this.registerTask(taskname, [
        this.addConfigTask("clean", taskname, file)
	]);
};
