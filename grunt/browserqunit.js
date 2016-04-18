module.exports = function (taskname, test, httpserver) {
	taskname = taskname || "browserqunit";
	if (httpserver) {
		this.grunt.loadNpmTasks('grunt-contrib-connect');
		return this.registerTask(taskname, [
			this.addConfigTask("connect", taskname, {
				options: {
					  port: 8711,
					  hostname: this.myip(),
					  base: '.',
					  keepalive: true,
					  open: {
						   target: 'http://' + this.myip() + ':8711/' + test
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
