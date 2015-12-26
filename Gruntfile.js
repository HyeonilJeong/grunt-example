module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			compress: {
				files: {
					'dest/min.css': ['css/*.css']
				}
			}
		},
		concat: {
			files: {
				src: 'js/*.js',
				dest: 'tmp/all.js'
			}
		},
		uglify: {
			dest: {
				files: {
					'dest/min.js': 'tmp/all.js'
				}
			}
		},
		sprite: {
			all: {
				src: 'img/*.png',
				dest: 'dest/sprite.png',
				destCss: 'dest/sprite.css'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-spritesmith');
	grunt.registerTask('default', ['sprite', 'cssmin', 'concat', 'uglify']);
}
