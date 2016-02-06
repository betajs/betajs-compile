module.exports = function (taskname, code, tests) {
	this.grunt.loadNpmTasks('grunt-node-qunit');
	taskname = taskname || "qunit";
	return this.registerTask(taskname, [
		this.addConfigTask("node-qunit", taskname, {
			code : code,
			tests : tests,
			done : function(err, res) {
				publishResults("node", res, this.async());
			}
		})
	]);
};