module.exports = function (taskname, source, target, template, encode) {
	this.grunt.loadNpmTasks('grunt-contrib-concat');
	this.grunt.loadNpmTasks('grunt-yaml');
	this.grunt.loadNpmTasks('grunt-template');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "yamltojs";
	var grunt = this.grunt;
	return this.registerTask(taskname, [
        this.addConfigTask("concat", taskname, {
			src: source,
			dest: target + ".yml"
		}),
		this.addConfigTask("yaml", taskname, {
			options: {
				 middleware: function(response, json, src, dest){
					 if (encode) {
						 var map = function (source) {
							 if (typeof source === "string")
								 return encode(source);
							 if (typeof source === "object") {
								 var result = {};
								 for (var key in source)
									 result[key] = map(source[key]);
								 return result;
							 }
							 return source;
						 };
						 json = JSON.stringify(map(response), null, 4);
					 }
					 grunt.file.write(dest, json);
			         grunt.log.writeln('Compiled ' + src.cyan + ' -> ' + dest.cyan);
			     },
			     disableDest: true
			},
			src: target + ".yml",
			dest: target + ".json"
		}),
		this.addConfigTask("template", taskname, {
			options: {
				data: function () {
					return {
						data: grunt.file.readJSON(target + ".json")
					};
				}
			},
			src: template,
			dest: target
		}),
		this.addConfigTask("clean", taskname, [
		    target + ".json",
            target + ".yml"
        ])
	]);
};