module.exports = function (taskname, test, httpserver) {
	taskname = taskname || "browserqunit";
	if (httpserver) {
		this.grunt.loadNpmTasks('grunt-contrib-connect');
		return this.registerTask(taskname, [
			this.addConfigTask("connect", taskname, {
				options: {
					  port: 8711,
					  base: '.',
					  keepalive: true,
					  open: {
						   target: 'http://localhost:8711/' + test
					  }
				}
			})
		]);
	} else {
		this.grunt.loadNpmTasks('grunt-shell');
		return this.registerTask(taskname, [
			this.addConfigTask("shell", taskname, {
				command: "open " + test
			})
		]);
	}
};
