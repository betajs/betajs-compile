module.exports = function (taskname, options) {
	this.grunt.loadNpmTasks('grunt-wget');
	taskname = taskname || "dependencies";
	var files = {};
	var target = options.target || "./vendors";
	if (options.github) {
		options.github.forEach(function (github) {
			var splt = github.split("/");
			var orga = splt.shift();
			var repo = splt.shift();
			var file = splt[splt.length - 1];
			var path = splt.join("/");
			files[target + "/" + file] = "https://raw.githubusercontent.com/" + orga + "/" + repo + "/master/" + path; 
		});
	}
	return this.registerTask(taskname, [
		this.addConfigTask("wget", taskname, {
			options : {
				overwrite : true
			},
			files : files
		})
	]);
};