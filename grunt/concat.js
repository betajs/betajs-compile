module.exports = function (taskname, source, target) {
	this.grunt.loadNpmTasks('grunt-contrib-concat');
	taskname = taskname || "concat";
	var files = {};
	files[target] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("concat", taskname, {
			options : {
				banner : this.banner
			},
			files : files
		})
	]);
};
