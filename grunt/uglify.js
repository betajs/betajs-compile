module.exports = function (taskname, source, target) {
	this.grunt.loadNpmTasks('grunt-contrib-uglify');
	taskname = taskname || "uglify";
	var files = {};
	files[target] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("uglify", taskname, {
			options : {
				banner : this.banner
			},
			dest: target,
			src: source
		})
	]);
};
