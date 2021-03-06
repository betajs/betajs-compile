module.exports = function (taskname, code) {
	this.grunt.loadNpmTasks('grunt-contrib-csslint');
	taskname = taskname || "csslinter";
	return this.registerTask(taskname, [
		this.addConfigTask("csslint", taskname, {
			options : {
				"import" : 2,
				"box-sizing": false,
				"bulletproof-font-face": false,
				"floats": false,
				"font-sizes": false,
				"universal-selector": false,
        "order-alphabetical": false,
        "outline-none": false,
        "adjoining-classes": false
			},
			src: code
		})
	]);
};
