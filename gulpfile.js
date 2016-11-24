'use strict';
 
var gulp = require('gulp'),                   // importing Gulp
    sass = require('gulp-sass'),              // tool for compilng scss files to css
    del = require('del'),                     // tool for cleaning(deleting) up files and folders
    connect = require("gulp-connect"),        // Gulp plugin to run a webserver (with LiveReload)
    concat = require("gulp-concat"),          // tool for merging the multiple files into one
    uglify = require("gulp-uglify"),          // gulp-uglify emits an 'error' event if it is unable to minify a specific file.
    browserify = require("browserify"),       // Browserify will recursively analyze all the require() calls in your app in order to build a bundle you can serve up to the browser in a single <script> tag. 
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
    "/favicon.ico"
  ]
};

//-------------------------- Default task ------------------------------------

gulp.task('default', function(){
  console.log('\n\n\n\n---------------------- Gulp Menu --------------------------');
  console.log('gulp clean         - delete build folder (public folder)')
  console.log('gulp sass          - to compile .scss files.  ');
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
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/app.scss', ['sass']);
});


// ------------------------- Compile and concatenate all js files in app.js -----
gulp.task('build-scripts', function() {
  return  gulp.src([Config.srcdir + '/app.js', Config.srcdir + '/js/**.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'+ Config.destdir +'/js/'));
});


// ------------------------ Create build files ------------------------------
gulp.task('assets', function() {
  Config.assets.forEach(function(ass) {
    return gulp.src(Config.srcdir + ass + "**/*.*")
      .pipe(gulp.dest(Config.destdir + ass));
  });
});

gulp.task('index', function() {
  return gulp.src([Config.srcdir + "/*.{html, js, css, png, jpeg, jpg, gif, json, ico}"])
    .pipe(gulp.dest(Config.destdir));
});

gulp.task("build", ["build-scripts", "sass", "assets", "index"], function() {
});



// ------------------------ Create localhost ---------------------------------
gulp.task("server", function() {
  connect.server({
    root: "public",
    post: 8080
  });
});

gulp.task("serve", ["server"]);
