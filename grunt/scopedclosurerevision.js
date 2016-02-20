module.exports = function (taskname, source, target, bindings, version_assumptions, exports) {
	this.grunt.loadNpmTasks('grunt-git-revision-count');
	this.grunt.loadNpmTasks('grunt-preprocess');
	this.grunt.loadNpmTasks('betajs-scoped');
	taskname = taskname || "scopedclosurerevision";
	return this.registerTask(taskname, [
		this.addConfigTask("revision-count", null, {
			options : {
				property : 'revisioncount',
				ref : 'HEAD'
			}
		}),
		this.addConfigTask("scoped-closure", taskname, {
			bindings: bindings,
			version_assumptions: version_assumptions,
			defines : {
				"module:" : {
					guid : this.pkg.meta.guid,
					version: '<%= revisioncount %>.' + (new Date()).getTime()
				}
			},
			exports: exports ? "module:" : false,
			src : source,
			dest : target,
			banner : this.banner
		})
	]);
};
