module.exports = function (taskname, test, httpserver, ngrok) {
	taskname = taskname || "browserqunit";
	if (httpserver) {
		this.grunt.loadNpmTasks('grunt-contrib-connect');
		if (ngrok) {
			this.grunt.loadNpmTasks('grunt-shell');
			this.registerTask(taskname + "-ngrok", function () {
				require("child_process").spawn("ngrok", ["http", "8711"]);
			});
		}
		return this.registerTask(taskname, [
			ngrok ? taskname + "-ngrok" : null,
			ngrok ? this.addConfigTask("shell", taskname, {
				command: "open http://127.0.0.1:4040"
			}) : null,
			this.addConfigTask("connect", taskname, {
				options: {
					  port: 8711,
					  hostname: "*",
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
