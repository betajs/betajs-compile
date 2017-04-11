module.exports = function (taskname, source, target, options) {
	this.grunt.loadNpmTasks('grunt-contrib-concat');
	taskname = taskname || "concat";
	options = options || {};
	var files = {};
	files[target] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("concat", taskname, {
			options : {
				banner : options.banner ? options.banner.call(this) : this.banner,
				process: options.process
			},
			files : files
		})
	]);
};
