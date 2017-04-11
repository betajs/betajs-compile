module.exports = function (taskname, source, target, bindings, version_assumptions, exports, process) {
	this.grunt.loadNpmTasks('grunt-preprocess');
	this.grunt.loadNpmTasks('betajs-scoped');
	taskname = taskname || "scopedclosurerevision";
	return this.registerTask(taskname, [
		this.addConfigTask("scoped-closure", taskname, {
			bindings: bindings,
			version_assumptions: version_assumptions,
			defines : {
				"module:" : {
					guid : this.pkg.meta.guid,
					version: this.pkg.version
				}
			},
			exports: exports ? "module:" : false,
			src : source,
			dest : target,
			banner : this.banner,
			process: process
		})
	]);
};
