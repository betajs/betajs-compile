module.exports = function (taskname, source, target, reserved) {
	this.grunt.loadNpmTasks('grunt-contrib-uglify');
	taskname = taskname || "uglify";
	var files = {};
	files[target] = [source];
	return this.registerTask(taskname, [
        this.addConfigTask("uglify", taskname, {
			options : {
				banner : this.banner,
				mangle: {
					except: reserved || []
				}
			},
			dest: target,
			src: source			
		})
	]);
};
