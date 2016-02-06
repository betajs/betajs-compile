module.exports = function (taskname) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "license";
	return this.registerTask(taskname, [
		this.addConfigTask("template", taskname, {
			options : {
				data: this.pkg
			},
			files : {
				"LICENSE" : [this.localFile("templates/docs/apache-license.tpl")]
			}
		})
	]);
};