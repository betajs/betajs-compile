module.exports = function (taskname, source, target, options) {
	this.grunt.loadNpmTasks('grunt-contrib-concat');
	this.grunt.loadNpmTasks('grunt-dart-sass');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "concatsass";
	options = options || {};
	var files = {};
	files[target + ".scss"] = [source];
	var self = this;
	this.registerTask(taskname + "-remove-charset", function () {
		var lines = self.grunt.file.read(target).split("\n");
		lines = lines.filter(function (s) {
			return s.indexOf("@charset") !== 0;
		}).map(function (l) {
			var r = "";
			l.split("").forEach(function (c) {
				var code = c.charCodeAt(0);
				if (code > 255)
					r += "\\" + code.toString(16);
				else
					r += c;
			});
			return r;
		});
		self.grunt.file.write(target, lines.join("\n"));
	});
	return this.registerTask(taskname, [
        this.addConfigTask("concat", taskname, {
			options : {
				banner : options.banner ? options.banner.call(this) : this.banner
			},
			files : files
		}),
        this.addConfigTask("dart-sass", taskname, {
        	options: {
				sourceMap: false
			},
			src: target + ".scss",
			dest: target
		}),
		taskname + "-remove-charset",
		this.addConfigTask("clean", taskname, target + ".scss")
	]);
};