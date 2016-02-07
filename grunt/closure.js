module.exports = function (taskname, source, target, options) {
	this.grunt.loadNpmTasks('grunt-closure-tools');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	options = options || {};
	taskname = taskname || "closure";
	if (typeof source === "string")
		source = [source];
	target = target || (source[0] + ".closure.js");
	var externs = [this.localFile("js/fragments/closure.js-fragment")];
	if (options.jquery)
		externs.push(this.localFile("vendors/jquery-1.9.closure-extern.js"));
	return this.registerTask(taskname, [
		this.addConfigTask("closureCompiler", taskname, {
			options : {
				compilerFile : process.env.CLOSURE_PATH + "/compiler.jar",
				compilerOpts : {
					compilation_level : 'ADVANCED_OPTIMIZATIONS',
					warning_level : 'verbose',
					externs : externs
				}
			},
			src : source,
			dest : target
		}),
		options.keeptarget ? null : this.addConfigTask("clean", taskname, target)
	]);
};