module.exports = function (taskname, source, target, bindings, version_assumptions, exports, process, options) {
	options = options || {};
	options.module_name = options.module_name || "module";
    this.grunt.loadNpmTasks('grunt-preprocess');
	this.grunt.loadNpmTasks('betajs-scoped');
	taskname = taskname || "scopedclosurerevision";
	var defines = {};
    defines[options.module_name + ":"] = {
        guid : this.pkg.meta.guid,
		version: this.pkg.version,
		datetime: (new Date()).getTime()
    };
	return this.registerTask(taskname, [
		this.addConfigTask("scoped-closure", taskname, {
			bindings: bindings,
			version_assumptions: version_assumptions,
			defines : defines,
			exports: exports ? (options.module_name + ":") : false,
			src : source,
			dest : target,
			banner : this.banner,
			process: process
		})
	]);
};
