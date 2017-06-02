
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		//1:配置concat插件 concat任务将所有存在于src/目录下以.js结尾的文件合并起来，然后存储在dist目录中，并以项目名来命名。
		concat: {
      options: {
				// 定义一个用于插入合并输出文件之间的字符
        separator: ';'
      },
      dist: {
				// 将要被合并的文件
        src: ['src/*.js'],
				// 合并后的JS文件的存放位置
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
		//2:配置uglify插件，它的作用是压缩（minify）JavaScript文件
    uglify: {
      options: {
				//此处定义的banner注释将插入到输出文件的顶部
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }
  });

  // 我们还要加载所需要的Grunt插件
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

	// 只需在命令行上输入"grunt"，就会执行default task
  grunt.registerTask('default', ['concat', 'uglify']);

};
