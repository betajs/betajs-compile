module.exports = function (taskname) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "readme";
	return this.registerTask(taskname, [
        this.addConfigTask("template", taskname, {
			options : {
				data: {
					indent: "",
					framework: this.pkg
				}
			},
			files : {
				"README.md" : [this.localFile("templates/docs/main-readme.tpl")]
			}
		})
	]);
};