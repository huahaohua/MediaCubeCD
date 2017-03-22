/*global module:false*/
'use strict';
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        // console.log(pkg),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // cwd:'app',
        jsfiles: [
            'app/app.js',
            'app/main.js',
            'app/appRouter.js',
            'app/login/**/*.js',
            'app/appHeader.js',
            'app/components/**/*.js',
            '!app/components/util/ueditor/dialogs/**/*.js',
            '!app/components/service/editPicture/trsCutPicture/cropper/js/*.js',
            'app/editingCenter/**/*.js',
            '!app/editingCenter/newspager/service/**/*.js',
            '!app/editingCenter/website/fragmentManagement/visualEditing/js/*.js'
            // 'app/manageConfig/**/*.js',//2017/3/21-delete
            // 'app/operateCenter/**/*.js',
            //  'app/resourceCenter/**/*.js',//2017/3/21-delete
            // 'app/visualizationCenter/**/*.js',
            //  'app/myZone/**/*.js', //2017/3/21-delete
            //  'app/planningCenter/**/*.js',//2017/3/21-delete
            //  '!app/planningCenter/cueSelectedTopic/hotHeadLine/template/hotInfoVisual/**/*.js',//2017/3/21-delete
            //  "!app/planningCenter/selectedTopicEvent/eventAnalysis/detail/eventTracks/wordCloud/*.js",//2017/3/21-delete
            //  "!app/planningCenter/selectedTopicEvent/eventAnalysis/detail/eventTracks/wordCloud/echarts2/*.js",//2017/3/21-delete
        ],
        jsfiles2: [

            'app/editingCenter/website/fragmentManagement/visualEditing/visualEditing.js',
            'app/components/util/bootstrapPaginator/*.js',
            'app/components/service/sweetalert/*.js',
            'app/components/util/colorPicker/*.js',
            'app/components/service/selectDocument/*.js',
            'app/components/util/dateTimePicker/*.js',
            'app/components/util/dropListUtil/*.js',
            'app/components/util/smallIcon/*.js',
            'app/components/util/trsHttpService/httpService.js',
            'app/components/util/trsMessage/*.js',
            'app/components/util/trsTree/*.js',
            'app/components/util/trsImageUpload/*.js',
            'app/components/util/trsCheckbox/*.js',
            'app/components/filter/trslimitTo/*.js',
            'app/components/util/trsDropDownList/*.js',
            'app/editingCenter/service/initSelectedService/trsSingleSelectionService.js',
            'app/editingCenter/website/fragmentManagement/**/**/*.js',
            'app/components/service/spliceString/*.js',
            'app/login/*.js',
            '!app/editingCenter/website/fragmentManagement/widgetMgr/**/**/**/*.js',
            '!app/editingCenter/website/fragmentManagement/fragmentManagement.js',
            '!app/editingCenter/website/fragmentManagement/visualEditing/js/layer.js',
            '!app/components/util/ueditor/dialogs/material/internal.js'
        ],
        cssfiles: [
            'app/app.css',
            'app/login/*.css',
            'app/components/**/*.css',
            'app/editingCenter/**/*.css',
            // 'app/resourceCenter/**/*.css',
            // 'app/planningCenter/**/*.css',
            // 'app/manageConfig/**/*.css',
            // 'app/manageConfig/**/**/*.css',
            //  'app/planningCenter/**/*.css',//2017/3/21-delete
            // 'app/visualizationCenter/**/*.css',
            'app/login/**/*.css',
            // 'app/myZone/**/*.css',
            '!app/components/util/ueditor/dialogs/**/*.css',
            // '!app/planningCenter/cueSelectedTopic/hotHeadLine/template/hotInfoVisual/**/*.css',
            '!app/editingCenter/website/fragmentManagement/visualEditing/css/*.css',
            '!app/editingCenter/website/fragmentManagement/visualEditing/**/**/*.css',
            '!app/components/util/ueditor/service/css/ueditorBuiltInStyles.css',
            '!app/components/service/editPicture/trsCutPicture/cropper/css/*.css'
        ],
        otherFiles: [
            'lib/**/*',
            'components/**/*',
            // '!components/**/*.css',
            // '!components/**/*.less',
            // '!components/**/*.js',
            'i18n/**/*',
            'login/**/*',
            '!login/**/*.css',
            '!login/**/*.less',
            '!login/**/*.js',
            //  'myZone/**/*',//2017/3/21-delete
            // '!myZone/**/*.css',
            //  '!myZone/**/*.js',//2017/3/21-delete
            // 'visualEditTemp/**/*',
            // '!visualEditTemp/**/*.css',
            // '!visualEditTemp/**/*.js',
            // 'visualizationCenter/**/*',
            // '!visualizationCenter/**/*.css',
            // '!visualizationCenter/**/*.js',
            'main.js'
        ],
        // Task configuration.
        less: {
            options: {
                // banner: '/**\n * <%= pkg.name %> - less CSS for app\n * @licence <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>)\n */\n\n\n',
                // paths: "global.css",
                // strictImports: true,
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: [
                        '**/*.less',
                        '!*.less',
                        '!bower_components/**/*.less',
                        '!lib/**/*.less',
                    ],
                    dest: 'app',
                    ext: '.css'
                }]
            },
        },
        concat: {
            options: {
                banner: '/**\n * <%= pkg.name %> - concat JS for app\n * @licence <%= pkg.name %> - v<%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)\n */\n\n\n'
            },
            js: {
                //src: ['src/**/*.js'],
                src: '<%= jsfiles %>',
                dest: 'dist/<%= pkg.name %>.js'
            },
            js2: {
                src: '<%= jsfiles2 %>',
                dest: 'dist/editingCenter/website/fragmentManagement/visualEditing/js/visualEditing.js'
            },
            css: {
                src: '<%= cssfiles %>',
                dest: 'dist/<%= pkg.name %>.css'
            }
        },
        replace: {
            indexjs: {
                options: {
                    patterns: [{
                        match: /js\?v=(\d{14})/,
                        replacement: 'js?v=<%= grunt.template.today("yyyymmddHHmmss") %>'
                    }]
                },
                files: [{
                    src: ['dist/index.html'],
                    dest: 'dist/index.html'
                }, {
                    src: ['dist/visualEditing.html'],
                    dest: 'dist/visualEditing.html'
                }]
            },
            indexcss: {
                options: {
                    patterns: [{
                        match: /css\?v=(\d{14})/,
                        replacement: 'css?v=<%= grunt.template.today("yyyymmddHHmmss") %>'
                    }]
                },
                files: [{
                    src: ['dist/index.html'],
                    dest: 'dist/index.html'
                }, {
                    src: ['dist/visualEditing.html'],
                    dest: 'dist/visualEditing.html'
                }]
            },
            htmlreplace: {
                options: {
                    patterns: [{
                        match: /_tpl\.html+(\?v=(\d{14}))?/g,
                        replacement: '_tpl.html?v=<%= grunt.template.today("yyyymmddHHmmss") %>'
                    }]
                },
                files: [{
                    src: ['dist/app.js'],
                    dest: 'dist/app.js'
                }]
            }
        },
        jshint: {
            options: {
                curly: false,
                eqeqeq: false,
                newcap: false,
                noarg: false,
                sub: false,
                undef: true,
                boss: true,
                node: true,
                '-W033': true, // ignore: Missing semicolon
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: ['<%= concat.js.dest %>']
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.js.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.css.dest %>',
                dest: 'dist/<%= pkg.name %>.min.css'
            }
            // dist: {
            //     files: [{
            //         expand: true,
            //         cwd: 'app',
            //         flatten: false,
            //         filter: 'isFile',
            //         src: [
            //             '**/*.css',
            //             '!lib/**/*.css'
            //         ],
            //         dest: 'dist/'
            //     }]
            // }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        copy: {
            // app: {
            //     files: [{
            //         expand: true,
            //         cwd: 'app',
            //         flatten: false,
            //         src: [
            //             '**/*',
            //             //'!**/*.js',
            //             '!**/*.css',
            //             'lib/**/*.*',
            //             '!bower_components/**/*.*',
            //             '!app.js',
            //             '!app/index.html',
            //             '!editingCenter/website/fragmentManagement/visualEditing/js/visualEditing.js'
            //         ],
            //         dest: 'dist/'
            //     }]
            // },
            edit: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    flatten: false,
                    src: [
                        'editingCenter/**/*',
                        '!editingCenter/**/*.js',
                        '!editingCenter/**/*.css',
                        '!editingCenter/**/*.less',
                        '!editingCenter/website/fragmentManagement/visualEditing/js/visualEditing.js'
                    ],
                    dest: 'dist'
                }]
            },
            //  manage: { //2017/3/21-delete
            //      files: [{
            //          expand: true,
            //          cwd: 'app',
            //          flatten: false,
            //          src: [
            //              'manageConfig/**/*',
            //              '!manageConfig/**/*.js',
            //              '!manageConfig/**/*.css',
            //              '!manageConfig/**/*.less',
            //          ],
            //          dest: 'dist'
            //      }]
            //  },
            // operate: {
            //     files: [{
            //         expand: true,
            //         cwd: 'app',
            //         flatten: false,
            //         src: [
            //             'operateCenter/**/*',
            //             '!operateCenter/**/*.js',
            //             '!operateCenter/**/*.css',
            //             '!operateCenter/**/*.less',
            //         ],
            //         dest: 'dist'
            //     }]
            // },
            //  plan: {
            //      files: [{
            //          expand: true,
            //          cwd: 'app',
            //          flatten: false,
            //          src: [
            //              'planningCenter/**/*',
            //              '!planningCenter/**/*.js',
            //              '!planningCenter/**/*.css',
            //              '!planningCenter/**/*.less',
            //              'planningCenter/cueSelectedTopic/hotHeadLine/**/*'
            //          ],
            //          dest: 'dist'
            //      }]
            //  },
            //  resource: {  //2017/3/21-delete
            //      files: [{
            //          expand: true,
            //          cwd: 'app',
            //          flatten: false,
            //          src: [
            //              'resourceCenter/**/*',
            //              '!resourceCenter/**/*.js',
            //              '!resourceCenter/**/*.css',
            //              '!resourceCenter/**/*.less',
            //          ],
            //          dest: 'dist'
            //      }]
            //  },
            other: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    flatten: false,
                    src: '<%= otherFiles %>',
                    dest: 'dist/'
                }]
            },
            rootHtmlFile: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    flatten: false,
                    src: ['*.html'],
                    dest: 'dist/'
                }]
            },
        },
        bower: {
            install: {
                options: {
                    targetDir: 'dist/lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        html2js: {
            options: {
                // custom options, see below
            },
            main: {
                src: ['app/components/htmlTemplates/*.html'],
                dest: 'app/components/htmlTemplates/templates.js'
            }
        },
        // 配置一个静态文件 Web 服务器，用于在修改文件后自动刷新网页，从而看到修改效果
        connect: {
            options: {
                port: 8888,
                hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35729 //声明给 watch 监听的端口
            },
            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        'dist' //指定主目录
                    ]
                }
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            appjs: {
                files: ['app/**/*.js'],
                tasks: [ /*'jshint:app',*/ /*'copy:app',*/ 'html2js', 'concat', 'replace',
                    'uglify'
                ]
            },
            appless: {
                files: ['app/**/*.less'],
                tasks: ['less', /*'cssmin',*/ /*'copy:app',*/ 'concat', 'replace']
            },
            appcss: {
                files: ['app/**/*.css'],
                tasks: [ /*'jshint:app',*/ 'cssmin', /*'copy:app',*/ 'concat', 'replace']
            },
            livereload: {
                options: {
                    livereload: '<%=connect.options.livereload%>' //监听前面声明的端口  35729
                },
                files: [ //下面文件的改变会实时刷新网页
                    'dist/**/*'
                ]
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            },
            watchrootHtmlFile: {
                files: ['app/**/*.html'],
                tasks: ['copy:rootHtmlFile']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');


    // Default task.
    grunt.registerTask('default', [ /*'jshint:app',*/ 'copy',
        'html2js', 'bower', 'less', 'concat', 'replace', 'uglify', 'cssmin', 'connect'/*, 'watch'*/
    ]);
    grunt.registerTask('lessTask', ['less', 'concat:css']);
    // grunt.registerTask('serve', ['connect:serve', 'watch']);
    // grunt.registerTask('watchTask', ['watch']);
    // grunt.registerTask('watchTask', ['watch:appless', 'watch:livereload']);
};
