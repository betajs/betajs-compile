module.exports = function (taskname, sources) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "codeclimate";
	sources = sources || ["src/**/*.js"];
	var excluded = [];
	["dist", "compile", "vendors", "docsrc", "demos", "tests", "tasks", "docs"].forEach(function (ex) {
		var found = false;
		sources.forEach(function (so) {
			found = found || so.indexOf(ex) === 0;
		});
		if (found)
			return;
		excluded.push(ex + "/*");
		excluded.push(ex + "/**/*");
	});
	return this.registerTask(taskname, [
		this.addConfigTask("template", taskname, {
			options : {
				data: {
					sources: sources,
					excluded: excluded
				}
			},
			files : {
				".codeclimate.yml" : [this.localFile("templates/yml/codeclimate.tpl")]
			}
		})
	]);
};