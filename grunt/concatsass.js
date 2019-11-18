module.exports = function (taskname, source, target, options) {
	this.grunt.loadNpmTasks('grunt-contrib-concat');
	this.grunt.loadNpmTasks('grunt-dart-sass');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "concatsass";
	options = options || {};
	var files = {};
	files[target + ".scss"] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("concat", taskname, {
			options : {
				banner : options.banner ? options.banner.call(this) : this.banner
			},
			files : files
		}),
        this.addConfigTask("dart-sass", taskname, {
        	options: {
				sourceMap: false
			},
			src: target + ".scss",
			dest: target
		}),
		this.addConfigTask("clean", taskname, target + ".scss")
	]);
};