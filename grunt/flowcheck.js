module.exports = function (taskname, code, tests, deps) {
	this.grunt.loadNpmTasks('grunt-flow-type-check');
	taskname = taskname || "flowcheck";
	return this.registerTask(taskname, [
		this.addConfigTask("flow", taskname, {
			src: 'dist/',            // `.flowconfig` folder
			options: {
				background: false,    // Watch/Server mode
				all: false,           // Check all files regardless
				lib: '',              // Library directory
				stripRoot: false,     // Relative vs Absolute paths
				weak: false,          // Force weak check
				showAllErrors: true // Show more than 50 errors
			}
		})
	]);
};
