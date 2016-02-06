module.exports = function (taskname, source, target, keeptarget) {
	this.grunt.loadNpmTasks('grunt-closure-tools');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "closure";
	target = target || source + ".closure.js"
	return this.registerTask(taskname, [
		this.addConfigTask("closureCompiler", taskname, {
			options : {
				compilerFile : process.env.CLOSURE_PATH + "/compiler.jar",
				compilerOpts : {
					compilation_level : 'ADVANCED_OPTIMIZATIONS',
					warning_level : 'verbose',
					externs : [this.localFile("js/fragments/closure.js-fragment")]
				}
			},
			src : source,
			dest : target
		}),
		keeptarget ? null : this.addConfigTask("clean", taskname, target)
	]);
};