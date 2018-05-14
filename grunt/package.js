module.exports = function (taskname, options) {
	taskname = taskname || "package";
	var _ = require("lodash");
	var grunt = this.grunt;
	return this.registerTask(taskname, function () {
		var src = grunt.file.readJSON('package-source.json');
		var baseUrl = src.repository.url.replace("git://", "https://").replace(".git", "");
		src = _.extend({
			"homepage": "https://betajs.com",
			"license": "Apache-2.0",
			"licenses": [{
				"type": "Apache-2.0",
				"url": baseUrl + "/blob/master/LICENSE"
			}],
			"author": {
			    "name": "BetaJS",
			    "email": "info@betajs.com"
			},
			"bugs": {
				"url": baseUrl + "/issues"
			}
		}, src);
		src.meta = _.extend({
			"blog": "https://blog.betajs.com",
			"twitter": "https://twitter.com/thebetajs"
		}, src.meta);
		grunt.file.write("package.json", JSON.stringify(src, "", 4));
	});
};
