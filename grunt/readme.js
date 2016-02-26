module.exports = function (taskname) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "readme";
	return this.registerTask(taskname, [
        this.addConfigTask("template", taskname, {
			options : {
				data: {
					indent: "",
					framework: this.pkg,
					installdoc: this.pkg.meta.installdoc ? this.grunt.file.read(this.pkg.meta.installdoc) : null,
					summarydoc: this.pkg.meta.summarydoc ? this.grunt.file.read(this.pkg.meta.summarydoc) : null
				}
			},
			files : {
				"README.md" : [this.localFile("templates/docs/main-readme.tpl")]
			}
		})
	]);
};