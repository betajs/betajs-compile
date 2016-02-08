module.exports = function (taskname, source, target) {
	this.grunt.loadNpmTasks('grunt-contrib-cssmin');
	taskname = taskname || "cssmin";
	var files = {};
	files[target] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("cssmin", taskname, {
			dest: target,
			src: source
		})
	]);
};
