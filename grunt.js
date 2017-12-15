var cmd = function (command, deflt) {
	try {
		return (require('child_process', {encoding: "string"}).execSync(command) + "").trim() || deflt;
	} catch (e) {
		return deflt;
	}
};

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
		this.grunt.registerTask(taskname, typeof tasks !== "object" ? tasks : tasks.filter(function (s) {
			return !!s;
		}));
		return this;
	},
	
	myip: function () {
		return cmd("ifconfig | grep 'inet '  | grep broadcast | sed 's/.*inet \\(.*\\) netmask.*/\\1/'", "127.0.0.1").split("\n")[0];
	},
	
	myhostname: function () {
		return cmd("hostname", "localhost").toLowerCase();
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
    "scopedclosurerevision",
    "package",
    "benchmark",
	"githook",
	"gittag",
	"qunitjs",
	"jsbeautify",
	"autoincreasepackage"
    
].forEach(function (task) {
	module.exports[task + "Task"] = require(__dirname + "/grunt/" + task + ".js");
});
