module.exports = function (taskname) {
	this.grunt.loadNpmTasks('grunt-template');
	this.grunt.loadNpmTasks('grunt-jsdoc');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "docs";
	return this.registerTask(taskname, [
        this.addConfigTask("template", taskname, {
			options: {
				data: {
					data: {
						"tags": {
							"allowUnknownTags": true
						},
						"plugins": ["plugins/markdown"],
						"templates": {
							"cleverLinks": false,
							"monospaceLinks": false,
							"dateFormat": "ddd MMM Do YYYY",
							"outputSourceFiles": true,
							"outputSourcePath": true,
							"systemName": this.pkg.name,
							"footer": "",
							"copyright": "BetaJS (c) - Apache License",
							"navType": "vertical",
							"theme": "cerulean",
							"linenums": true,
							"collapseSymbols": false,
							"inverseNav": true,
							"highlightTutorialCode": true,
							"protocol": "fred://",
							"singleTutorials": true
						},
						"markdown": {
							"parser": "gfm",
							"hardwrap": true
						}
					}
				}
			},
			files : {
				"jsdoc.conf.json": [this.localFile("templates/json/json.tpl")]
			}
        }),
        this.addConfigTask("jsdoc", taskname, {
			src : [ './README.md', './src/**/*.js' ],					
			options : {
				destination : 'docs',
				template : "node_modules/grunt-betajs-docs-compile",
				configure : "./jsdoc.conf.json",
				tutorials: "./docsrc/tutorials",
				recurse: true
			}
        }),
        this.addConfigTask("clean", taskname, "./jsdoc.conf.json")
	]);                                 
};