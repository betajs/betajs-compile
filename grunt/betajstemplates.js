module.exports = function (taskname, source, target, namespace, noscoped) {
	this.grunt.loadNpmTasks('grunt-betajs-templates');
	taskname = taskname || "betajstemplates";
	var files = {};
	files[target] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("betajs_templates", taskname, {
			options : {
				namespace: namespace,
				scoped: !noscoped
			},
			files: files
		})
	]);
};
