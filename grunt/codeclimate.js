module.exports = function (taskname, sources) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "codeclimate";
	sources = sources || ["src/**/*.js"];
	return this.registerTask(taskname, [
		this.addConfigTask("template", taskname, {
			options : {
				data: {
					sources: sources
				}
			},
			files : {
				".codeclimate.yml" : [this.localFile("templates/yml/codeclimate.tpl")]
			}
		})
	]);
};