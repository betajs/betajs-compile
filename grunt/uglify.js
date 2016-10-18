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
					screwIE8: false,
					supportIE8: true,
					except: reserved || []
				},
				ASCIIOnly: true,
				screwIE8: false,
				supportIE8: true
			},
			dest: target,
			src: source			
		})
	]);
};
