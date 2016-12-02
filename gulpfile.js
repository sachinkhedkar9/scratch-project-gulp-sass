'use strict';
 
var gulp = require('gulp'),                   // importing Gulp
    sass = require('gulp-sass'),              // tool for compilng scss files to css
    del = require('del'),                     // tool for cleaning(deleting) up files and folders
    jshint = require("gulp-jshint"),          // Detect errors and potential problems in your JavaScript code.
    connect = require("gulp-connect"),        // Gulp plugin to run a webserver (with LiveReload)
    concat = require("gulp-concat"),          // tool for merging the multiple files into one
    uglify = require("gulp-uglify"),          // gulp-uglify emits an 'error' event if it is unable to minify a specific file.
    // browserify = require("browserify"),       // Browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag.
    browserSync = require("browser-sync").create(), // Reload brower when any change is made in html/scss/js
    pkg = require("./package.json");          // Include the dependencies


var Config = {
  srcdir: "src",
  destdir: "public",
  assets: [
    "/index.html",
    "/lib/",
    "/css/",
    "/font/",
    "/images/",
    "/views/",
    "/bower_components/",
    "/favicon.ico"
  ]
};

//-------------------------- Default task ------------------------------------

gulp.task('default', function(){
  console.log('\n\n\n\n---------------------- Gulp Menu --------------------------');
  console.log('gulp clean         - delete build folder (target folder)')
  console.log('gulp sass          - to compile .scss files.  ');
  console.log('gulp build-scripts - compile and concatenate js files')
  console.log('gulp build         - to build the project files');
  console.log('gulp serve/server  - host build files at localhost:8080')
  console.log('-----------------------------------------------------------\n\n');
});

// ------------------------ Clean build files --------------------------------
gulp.task("clean", function(cb) {
  del([Config.destdir + "/**"], cb);
});


//------------------------- Compile scss files ------------------------------
gulp.task('sass', function () {
  return gulp.src(Config.srcdir + '/app.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(Config.destdir + '/css'));
});


// ------------------------- Compile and concatenate all js files in app.js -----
gulp.task('jshint', function(){
  return  gulp.src([Config.srcdir + '/app.js', Config.srcdir + '/js/**/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'))
});

gulp.task('build-scripts', ['jshint'], function() {
  return  gulp.src([Config.srcdir + '/app.js', Config.srcdir + '/js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'+ Config.destdir +'/js/'));
});


// ------------------------ Create build files ------------------------------

gulp.task('support-files', function() {
  return gulp.src([Config.srcdir + "/*.{html, js, css, png, jpeg, jpg, gif, json, ico}"])
    .pipe(gulp.dest(Config.destdir));
});

gulp.task('assets-content', function(){
  Config.assets.forEach(function(asset){
    return gulp.src(Config.srcdir + asset + '/**/*.*', {base: Config.srcdir})
          .pipe(gulp.dest(Config.destdir))
  });
});


gulp.task("build", [ "assets-content", "build-scripts", "sass", "support-files"], function() {
});


// ------------------------ Refresh HTML -------------------------------------
gulp.task("refresh-html", function(){
  return gulp.src(Config.srcdir + '/**/*.html')
        .pipe(gulp.dest(Config.destdir))
}); 


// ------------------------ Create localhost ---------------------------------
gulp.task("server", function() {
    browserSync.init({
        server: "./public",
        port: 8080
    });

  gulp.watch('./src/**/*.scss', ['sass']).on('change', function(){
    setTimeout(browserSync.reload, 1000)
  });
  gulp.watch('./src/**/*.js', ['build-scripts']).on('change', function(){
    setTimeout(browserSync.reload, 1000)
  });
  gulp.watch('./src/**/*.html', ['refresh-html']).on('change', function(){
    setTimeout(browserSync.reload, 1000)
  });

});

gulp.task("serve", ["server"]);

