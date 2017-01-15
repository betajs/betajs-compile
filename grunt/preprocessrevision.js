module.exports = function (taskname, source, target, keepsource) {
	this.grunt.loadNpmTasks('grunt-preprocess');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "preprocessrevision";
	return this.registerTask(taskname, [
		this.addConfigTask("preprocess", taskname, {
			options : {
				context : {
					GUID : this.pkg.meta.guid,
					VERSION : this.pkg.version
				}
			},
			src : source,
			dest : target
		}),
		keepsource ? null : this.addConfigTask("clean", taskname, source)
	]);
};