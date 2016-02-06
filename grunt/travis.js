module.exports = function (taskname, minversion) {
	this.grunt.loadNpmTasks('grunt-template');
	taskname = taskname || "travis";
	minversion = minversion || "0.10";
	var versions = ["0.10", "0.11", "0.12", "4.0", "4.1"];
	while (versions.length > 0 && versions[0] !== minversion)
		versions.shift();
	if (versions.length === 0)
		versions.push(minversion);
	return this.registerTask(taskname, [
		this.addConfigTask("template", taskname, {
			options: {
				data: {
					versions: versions
				}
			},
			files : {
				".travis.yml" : [this.localFile("templates/yml/travis.tpl")]
			}
		})
	]);
};