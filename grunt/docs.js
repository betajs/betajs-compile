module.exports = function (taskname, options) {
	this.grunt.loadNpmTasks('grunt-template');
	this.grunt.loadNpmTasks('grunt-jsdoc');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	taskname = taskname || "docs";
	options = options || {};
	return this.registerTask(taskname, [
        this.addConfigTask("template", taskname + "-temp-about", {
			options : {
				data: {
					indent: "",
					framework: this.pkg,
					installdoc: options.installdoc ? this.grunt.file.read(options.installdoc) : null
				}
			},
			files : {
				"TEMP-ABOUT.md" : [this.localFile("templates/docs/docs-about.tpl")]
			}
		}),
        this.addConfigTask("template", taskname + "-temp-builds", {
			options : {
				data: {
					indent: "",
					framework: this.pkg,
					installdoc: options.installdoc ? this.grunt.file.read(options.installdoc) : null
				}
			},
			files : {
				"TEMP-BUILDS.md" : [this.localFile("templates/docs/docs-builds.tpl")]
			}
		}),
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
							"theme": "paper",
							"linenums": true,
							"collapseSymbols": false,
							"inverseNav": true,
							"highlightTutorialCode": true,
							"protocol": "fred://",
							"singleTutorials": true,
							"singleModules": true,
							"analytics": {
								"ua": "UA-43747442-1",
								"domain": "betajs.com"
							}
						},
						"markdown": {
							"parser": "gfm",
							"hardwrap": true
						},
						"pages": {
							"builds": {
								"title": "Builds",
								"navbar": true,
								"first": true,
								"source": "./TEMP-BUILDS.md"
							},
							"about": {
								"title": "About",
								"navbar": true,
								"first": false,
								"source": "./TEMP-ABOUT.md"
							},
							"blog": {
								"title": "Blog",
								"url": this.pkg.meta.blog,
								"navbar": true
							},
							"github": {
								"title": "GitHub",
								"url": this.pkg.repository.url.replace("git://", "http://").replace(".git", ""),
								"navbar": true
							}
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
				template : options.internal ? "./" : "node_modules/grunt-betajs-docs-compile",
				configure : "./jsdoc.conf.json",
				tutorials: "./docsrc/tutorials",
				recurse: true
			}
        }),
        this.addConfigTask("clean", taskname, ["./jsdoc.conf.json", "./TEMP-*.md"])
	]);                                 
};