module.exports = function (taskname, src, dest, targetplayer) {
	this.grunt.loadNpmTasks('grunt-shell');
	taskname = taskname || "flash";
	targetplayer = targetplayer || "11.2";
	src = src.split("/");
	var filename = src.pop();
	var path = src.join("/");
	var pathDown = "";
	for (var i = 0; i < src.length; ++i)
		pathDown += "../";
	return this.registerTask(taskname, [
		this.addConfigTask("shell", taskname, {
			// https://github.com/nexussays/playerglobal/tree/master/11.2
	    	command: [
                'mxmlc',
                filename,
                '-target-player=' + targetplayer,                
                '-static-link-runtime-shared-libraries',
                '-output',
                pathDown + '/' + dest
	    	].join(" "),
	    	options: {
	        	stdout: true,
	        	stderr: true,
	        	execOptions: {
	            	cwd: path
	        	}
	    	},
	    	src: [
	    		path + "/*.as"
	    	]
		})
	]);
};
