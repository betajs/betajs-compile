var compatabilityMap = {
	"internet explorer": {
		browserstack_name: "ie",
		browserstack_expand: ["6", "7", "8", "9", "10", "11"],
		browserstack_versions: {
			"latest": "11"
		}
	},
	"edge": {
		browserstack_versions: {
			"12": "13"
		}
	},
	"opera": {
		browserstack_versions: {
			"12": "12_15"
		}
	},
	"ios": {
		mobile: true,
		browserstack_versions: {
			"latest": "9.3"
		}
	},
	"android": {
		mobile: true,
		browserstack_versions: {
			"latest": "4.2"
		}
	},
	"nodejs": {
		ignore: true
	}	
};

var browserstack = function (compatability, desktop, mobile) {
	var result = [];
	for (var key in compatability) {
		var value = compatability[key].toLowerCase();
		var versions = value.replace(/\s/g, '').split("-");
		if (versions.length !== 2)
			throw ("Cannot parse version '" + value + "'");
		var minversion = versions[0];
		var maxversion = versions[1];
		key = key.toLowerCase();
		var mapped = compatabilityMap[key];
		if (mapped && mapped.ignore)
			continue;
		var is_mobile = mapped && mapped.mobile;
		if ((is_mobile && !mobile) || (!is_mobile && !desktop))
			continue;
		if (!mapped) {
			result.push(key + "_" + minversion);
			result.push(key + "_" + maxversion);
		} else {
			var name = mapped.browserstack_name ? mapped.browserstack_name : key;
			var minver = mapped.browserstack_versions ? mapped.browserstack_versions[minversion] || minversion : minversion;
			var maxver = mapped.browserstack_versions ? mapped.browserstack_versions[maxversion] || maxversion : maxversion;
			var expand = mapped.browserstack_expand || (minver === maxver ? [minver] : [minver, maxver]);
			expand = expand.slice();
			while (expand.length > 0) {
				if (expand[0] === minver)
					break;
				expand.shift();
			}
			while (expand.length > 0) {
				var current = expand.shift();
				result.push(is_mobile ? {"os": name, "os_version": current} : (name + "_" + current));
				if (current === maxver)
					break;
			}
		}
	}
	return result;
};



module.exports = function (taskname, tests, options) {
	this.grunt.loadNpmTasks('grunt-template');
	this.grunt.loadNpmTasks('grunt-shell');
	this.grunt.loadNpmTasks('grunt-contrib-clean');
	options = options || {};
	if (!options.desktop && !options.mobile) {
		options.desktop = true;
		options.mobile = true;
	}
	taskname = taskname || ("browserstack" + (options.desktop !== options.mobile ? (options.desktop ? "-desktop" : "-mobile") : ""));
	return this.registerTask(taskname, [
        this.addConfigTask("template", taskname, {
        	options: {
        		data: {
        			data: {
    					"test_path" : tests,
    					"test_framework" : "qunit",
    					"timeout": 10 * 60,
    					"browsers": browserstack(this.pkg.meta.compatability, options.desktop, options.mobile)
        			}
        		}
        	},
        	files : {
    			"browserstack.json" : [this.localFile("templates/json/json.tpl")]
    		}
        }),
        this.addConfigTask("shell", taskname, {
        	command : 'browserstack-runner',
    		options : {
    			stdout : true,
    			stderr : true
    		}
        }),
        this.addConfigTask("clean", taskname, ["./browserstack.json", "BrowserStackLocal"]) 
    ]);
};