module.exports = function (taskname, code, eslint) {
	this.grunt.loadNpmTasks('grunt-contrib-jshint');
	if (eslint)
		this.grunt.loadNpmTasks('grunt-eslint');
	taskname = taskname || "lint";
	return this.registerTask(taskname, [
		this.addConfigTask("jshint", taskname, {
			options : {
				esversion: 3,
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
