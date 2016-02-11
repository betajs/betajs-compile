module.exports = function (taskname, options) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "readme";
	options = options || {}
	return this.registerTask(taskname, [
        this.addConfigTask("template", taskname, {
			options : {
				data: {
					indent: "",
					framework: this.pkg,
					installdoc: options.installdoc ? this.grunt.file.read(options.installdoc) : null
				}
			},
			files : {
				"README.md" : [this.localFile("templates/docs/main-readme.tpl")]
			}
		})
	]);
};