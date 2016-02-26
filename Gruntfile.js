module.exports = function(grunt) {

	var pkg = grunt.file.readJSON('package.json');
	var gruntHelper = require('./grunt.js');

	gruntHelper.init(pkg, grunt)
	
	
    /* Testing */
    .lintTask(null, ['grunt.js', 'grunt/*.js'])
    
    /* External Configurations */
    .codeclimateTask(null, ['grunt/*.js'])
    
    /* Package */
    .packageTask()
    
    /* Markdown Files */
	.readmeTask()
    .licenseTask();

	grunt.initConfig(gruntHelper.config);	

	grunt.registerTask('default', ['package', 'lint', 'readme', 'license', 'codeclimate']);
};