let gulp = require('gulp'),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    uglify = require("gulp-uglify"),
    concat = require ("gulp-concat"),
    rename = require ("gulp-rename"),
    del = require("del"),
    autoprefixer = require("gulp-autoprefixer")
;
    
gulp.task("clean", async function(){
    del.sync("dist")
});

gulp.task("scss", function() {
    return gulp.src("app/scss/**/*.scss")
    .pipe(sass({outputStyle:"expanded"})) //compressed expanded - переименовать на выходе
    .pipe(autoprefixer({
        overrideBrowserslist:["last 4 versions"]
    }))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("css", function(){
    return gulp.src([
        "node_modules/normalize.css/normalize.css",
        "node_modules/slick-carousel/slick/slick.css",
    ])
    .pipe(concat("_libs.scss"))
    .pipe(gulp.dest("app/scss"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("browser-sync", function (){
    browserSync.init({
        server:{
            baseDir: "app/"
        },
       notify: false 
    });
});

gulp.task("export", function(){
    let buildHtml = gulp.src("app/**/*.html")
    .pipe(gulp.dest("dist"));

    let buildCss= gulp.src("app/css/**/*.css")
    .pipe(gulp.dest("dist/css"));

    let buildJs= gulp.src("app/js/**/*.js")
    .pipe(gulp.dest("dist/js"));

    let buildFonts= gulp.src("app/fonts/**/*.*")
    .pipe(gulp.dest("dist/fonts"));

    let buildImg= gulp.src("app/img/**/*.*")
    .pipe(gulp.dest("dist/img"));

    let buildVideo= gulp.src("app/video/**/*.*")
    .pipe(gulp.dest("dist/video"));

});

gulp.task("html", function() {
    return gulp.src("app/.html")
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("script", function() {
    return gulp.src("app/js/*.js")
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("js", function(){
    return gulp.src([
     "node_modules/slick-carousel/slick/slick.js"
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({stream: true}))
});


gulp.task("watch", function() {
        gulp.watch("app/scss/**/*.scss", gulp.series("scss"));
        gulp.watch("app/*.html", gulp.series("html"))
        gulp.watch("app/js/*.js", gulp.parallel("script"))
});

gulp.task("build", gulp.series("clean", "export"));

gulp.task("default", gulp.series("css", "scss", "js", "browser-sync", "watch"));
