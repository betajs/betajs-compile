module.exports = function(grunt) {

	var pkg = grunt.file.readJSON('package.json');
	var gruntHelper = require('./grunt.js');

	gruntHelper.init(pkg, grunt)
	
	
    /* Testing */
    .lintTask(null, ['grunt.js', 'grunt/*.js'])
    
    /* External Configurations */
    .codeclimateTask(null, ['grunt/*.js'])
    
    /* Markdown Files */
	.readmeTask()
    .licenseTask();

	grunt.initConfig(gruntHelper.config);	

	grunt.registerTask('default', ['lint', 'readme', 'license', 'codeclimate']);
};