module.exports = function (taskname, code, tests, deps, opts) {
	this.grunt.loadNpmTasks('grunt-node-qunit');
	taskname = taskname || "qunit";
	opts = opts || {};
	this.registerTask("timeout-" + taskname, function () {
		if (opts.timeout) {
			opts._timer = setTimeout(function () {
				throw "Unit Test timeouted";
			}, opts.timeout);
		}
    });
	return this.registerTask(taskname, [
		"timeout-" + taskname,
		this.addConfigTask("node-qunit", taskname, {
			deps : deps || [],
			code : code,
			tests : tests,
			done : function(err, res) {
				publishResults("node", res, this.async());
				clearTimeout(opts._timer);
			}
		})
	]);
};