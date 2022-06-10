module.exports = function (taskname, code, eslint, options) {
	this.grunt.loadNpmTasks('grunt-contrib-jshint');
	if (eslint)
		this.grunt.loadNpmTasks('grunt-eslint');
	taskname = taskname || "lint";
	esversion = options.esversion || 3;
	return this.registerTask(taskname, [
		this.addConfigTask("jshint", taskname, {
			options : {
				esversion: esversion,
				smarttabs: true,
				withstmt: true,
                boss: true
			},
			files: {
				src: code
			}
		}),
		eslint ? this.addConfigTask("eslint", taskname, {
			options : {
			},
			files: {
				src: code
			}
		}) : null
	]);
};
