module.exports = { 
	
	config: {},
	
	init: function (pkg, grunt) {
		this.pkg = pkg;
		this.grunt = grunt;
		this.config.pkg = pkg;
		this.banner = '/*!\n<%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\nCopyright (c) <%= pkg.contributors %>\n<%= pkg.license %> Software License.\n*/\n';
		return this;
	},
	
	localFile: function (filename) {
		return __dirname + "/" + filename;
	},
	
	addConfigTask: function (task, goal, data) {
		this.config[task] = this.config[task] || {};
		if (goal) {
			this.config[task][goal] = data;
			return task + ":" + goal;
		} else {
			this.config[task] = data;
			return task;
		}
	},
	
	registerTask: function (taskname, tasks) {
		this.grunt.registerTask(taskname, tasks.filter(function (s) {
			return !!s;
		}));
		return this;
	}
	
};


[
    "readme",
    "license",
    "codeclimate",
    "travis",
    "preprocessrevision",
    "dependencies",
    "closure",
    "docs",
    "browserstack",
    "qunit",
    "browserqunit",
    "lint",
    "csslinter",
    "uglify",
    "cssmin",
    "concat",
    "flowcheck",
    "flash",
    "concatsass",
    "betajstemplates",
    "clean",
    "simplecopy",
    "multicopy",
    "yamltojs",
    "replacer",
    "scopedclosurerevision"
    
].forEach(function (task) {
	module.exports[task + "Task"] = require(__dirname + "/grunt/" + task + ".js");
});