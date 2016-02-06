module.exports = function (taskname) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "codeclimate";
	return this.registerTask(taskname, [
		this.addConfigTask("template", taskname, {
			files : {
				".codeclimate.yml" : [this.localFile("templates/yml/codeclimate.tpl")]
			}
		})
	]);
};