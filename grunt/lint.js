module.exports = function (taskname, code) {
	this.grunt.loadNpmTasks('grunt-contrib-jshint');
	taskname = taskname || "lint";
	return this.registerTask(taskname, [
		this.addConfigTask("jshint", taskname, {
			options : {
				es5 : false,
				es3 : true,
				smarttabs: true
			},
			files: {
				src: code
			}
		})
	]);
};
