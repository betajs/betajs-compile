module.exports = function (taskname, hookname, code) {
	this.grunt.loadNpmTasks('grunt-githooks');
	taskname = taskname || "githook";
	var obj = {};
	obj[hookname] = code;
	return this.registerTask(taskname, [
		this.addConfigTask("githooks", taskname, obj)
	]);
};
