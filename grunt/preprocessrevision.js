module.exports = function (taskname, source, target, keepsource) {
	this.grunt.loadNpmTasks('grunt-git-revision-count');
	this.grunt.loadNpmTasks('grunt-preprocess');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "preprocessrevision";
	return this.registerTask(taskname, [
		this.addConfigTask("revision-count", null, {
			options : {
				property : 'revisioncount',
				ref : 'HEAD'
			}
		}),
		this.addConfigTask("preprocess", taskname, {
			options : {
				context : {
					GUID : this.pkg.meta.guid,
					MAJOR_VERSION : '<%= revisioncount %>',
					MINOR_VERSION : (new Date()).getTime()
				}
			},
			src : source,
			dest : target
		}),
		keepsource ? null : this.addConfigTask("clean", taskname, source)
	]);
};