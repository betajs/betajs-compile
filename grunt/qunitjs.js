module.exports = function (taskname, code) {
    this.grunt.loadNpmTasks('grunt-shell');
	taskname = taskname || "qunitjs";
	return this.registerTask(taskname, [
        this.addConfigTask("shell", taskname, {
            command: ["node_modules/qunitjs/bin/qunit"].concat(code).join(" "),
            options: {
                stdout: true,
                stderr: true
            },
            src: [
                "src/**", "dist/**", "tests/**"
            ]
        })
	]);
};
